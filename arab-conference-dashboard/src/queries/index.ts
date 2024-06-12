"use server"
import { useLoalStorage } from "@/hooks/useLocalStorage";
import { getSessionUser } from "@/lib/session";
import { ConferenceSchema, TopicsSchema, signInSchema } from "@/schema";
import { z } from "zod"

export async function signInUser(values: z.infer<typeof signInSchema>) {
    const validatedFields = signInSchema.safeParse(values);
    const {setItem}=useLoalStorage("token");
    if (!validatedFields.success) {
        return { error: "Invalid fields !" };
    }
    const request = await fetch("http://localhost:3000/users/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    try {
        if (request.ok) {
            const user = await request.json();
            console.log(user)
            return { user,secccuss: "Login successful" };
        }
        return { error: "Invalid email or password !" };
    } catch (e) {
        return { error: "An error occurred " };
    }
}

export async function createConference(values: z.infer<typeof ConferenceSchema>) {
    const validatedFields = ConferenceSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields !" };
    }

    const request = await fetch("http://localhost:3000/conferences", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    try {
        if (request.ok) {
            return { secccuss: "Conference created successfully" };
        }
        return { error: "Inviled valuse conference data!" };
    } catch (e) {
        return { error: "An error occurred !" };
    }
}

export async function getUser() {
    const userId = await getSessionUser();
    console.log(userId)
    if (!userId) {
        return false;
    }
    return true;
}

export async function getTopics() {
    const request = await fetch("http://localhost:3000/topics",{ cache: 'no-store' });
    if (request.ok) {
        const topics = await request.json();
        return topics.data;
    }
    return [];
}

export async function createTopics(values: z.infer<typeof TopicsSchema>) {
    const validatedFields = TopicsSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: "Invalid fields !" };
    }

    const request = await fetch("http://localhost:3000/topics", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(values),
    });
    try {
        if (request.ok) {
            return { secccuss: "created successfully" };
        }
        return { error: "Inviled valuse data!" };
    } catch (e) {
        return { error: "An error occurred !" };
    }
}
export async function getSpeakerReq() {
    const request = await fetch("http://localhost:3000/speaker-applications", { cache: 'no-store' });
    if (!request.ok) {
        throw new Error('You must be signed in to perform this action')
    }
    if (request.ok) {
        const speakerApplications = await request.json();
        return speakerApplications.data;
    }
    return [];
}
export async function getAttendeeReq() {
    const request = await fetch("http://localhost:3000/attendance-applications", { cache: 'no-store' });
    if (!request.ok) {
        throw new Error('You must be signed in to perform this action')
    }
    if (request.ok) {
        const attendanceApplications = await request.json();
        return attendanceApplications.data;
    }
    return [];
}
export async function getConferences() {
    const request = await fetch("http://localhost:3000/conferences/", { cache: 'no-store' });
    if (!request.ok) {
        throw new Error('You must be signed in to perform this action')
    }
    if (request.ok) {
        const conferences = await request.json();
        return conferences.data;
    }
    return [];
}
