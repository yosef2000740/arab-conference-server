import * as jose from "jose";
import { cookies } from "next/headers";

const JOSE_SESSION_KEY = "zH4NRP1HMALxxCFnRZABFA7GOJtzU_gIj02alfL1lvI";

const secret = jose.base64url.decode(JOSE_SESSION_KEY!);

const issuer = "urn:joono:issuer";
const audience = "urn:joono:audience";
const expiresAt = "10h";

export const encodeUserSession = async (userId: number) => {
  return await new jose.EncryptJWT({ user: userId })
    .setProtectedHeader({ alg: "dir", enc: "A128CBC-HS256" })
    .setIssuedAt()
    .setIssuer(issuer)
    .setAudience(audience)
    .setExpirationTime(expiresAt)
    .encrypt(secret);
};

export const decodeUserSession = async (jwt: string) => {
  try {
    const { payload } = await jose.jwtDecrypt(jwt, secret, {
      issuer: issuer,
      audience: audience,
    });
    const { user } = payload;
    return user;
  } catch (e) {}
  return null;
};

// async function verifySession(){
//     const userId=1
//     const jwtToken=await encodeUserSession(userId);
//     const user=await decodeUserSession(jwtToken);
//     console.log(user,userId===user)
// }
// verifySession().then(x=>console.log("ver")).catch(err=>console.log(err))

export const setSessionUser = async (userId: number) => {
  const newSessionValue = await encodeUserSession(userId);

  cookies().set("session_id", newSessionValue);
};

export const getSessionUser = async () => {
  const cookieSessionValue = cookies().get("session_id");

  if (!cookieSessionValue) {
    return null;
  }

  const extractedUserId = await decodeUserSession(cookieSessionValue.value);
  if (!extractedUserId) {
    return null;
  }

  return extractedUserId;
};

export const endSessionUser = async () => {
  cookies().delete("session_id");
};
