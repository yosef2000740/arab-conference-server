'use client';
import {
	Form,
	FormControl,
	FormField,
	FormItem,
	FormLabel,
	FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { toast } from '@/components/ui/use-toast';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { visaSchema } from '@/schema';

const MOCK_VISA = {
	cardNumber: '5123456789012346',
	expirationDate: '12/25',
	cvv: '123',
};

export default function PaymentModal({
	showModal,
	setShowModal,
	setHasPaid,
}: {
	showModal: boolean;
	setShowModal: (show: boolean) => void;
	setHasPaid: (val: boolean) => void;
}) {
	const form = useForm<z.infer<typeof visaSchema>>({
		resolver: zodResolver(visaSchema),
		defaultValues: {
			cardNumber: '',
			expirationDate: '',
			cvv: '',
		},
	});

	const onSubmit = (values: any) => {
		if (
			values.cardNumber === MOCK_VISA.cardNumber &&
			values.expirationDate === MOCK_VISA.expirationDate &&
			values.cvv === MOCK_VISA.cvv
		) {
			toast({ title: 'Payment Successful' });

			setHasPaid(true);
			form.reset();
			setShowModal(false);
		} else {
			// error visa card
			toast({
				variant: 'destructive',
				title: 'Wrong Visa Card Details, Please Try Again!',
			});
		}
	};

	const ModalHeader = (
		<div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
			<h3 className="text-3xl font-semibold">Pay using Visa</h3>
			<button
				className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
				onClick={() => setShowModal(false)}
			>
				<span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
					×
				</span>
			</button>
		</div>
	);

	const ModalBody = (
		<div className="relative p-6 flex-auto">
			<p className="my-4 text-blueGray-500 text-lg leading-relaxed">
				<FormField
					control={form.control}
					name="cardNumber"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-xl">Card Number</FormLabel>

							<FormControl>
								<Input
									placeholder="1234 1234 1234 1234"
									className="placeholder:capitalize text-black text-xl"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="expirationDate"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-xl">Expiration Date</FormLabel>

							<FormControl>
								<Input
									placeholder="MM/YY"
									className="placeholder:capitalize text-black text-xl"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
				<FormField
					control={form.control}
					name="cvv"
					render={({ field }) => (
						<FormItem>
							<FormLabel className="text-xl">CVV</FormLabel>

							<FormControl>
								<Input
									placeholder="123"
									className="placeholder:capitalize text-black text-xl"
									{...field}
								/>
							</FormControl>
							<FormMessage />
						</FormItem>
					)}
				/>
			</p>
		</div>
	);

	const ModalFooter = (
		<div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
			<button
				className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="button"
				onClick={() => {
					if (confirm('Are you sure you want to cancel?')) {
						form.reset();
						setShowModal(false);
					}
				}}
			>
				Close
			</button>
			<button
				className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
				type="submit"
			>
				Save Changes
			</button>
		</div>
	);

	if (!showModal) return null;

	return (
		<>
			<div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto my-6 mx-auto max-w-3xl">
					<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
						{ModalHeader}
						<Form {...form}>
							<form onSubmit={form.handleSubmit(onSubmit)}>
								{ModalBody}
								{ModalFooter}
							</form>
						</Form>
					</div>
				</div>
			</div>
			<div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
		</>
	);
}
