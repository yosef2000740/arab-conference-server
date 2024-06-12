'use client';
import { Button } from '@/components/ui/button';
import { TableCell } from '@/components/ui/table';
import { useState } from 'react';
import PaymentModal from './PaymentModal';

export default function ApplyConference({ _id, setHasPaid }: { _id: unknown, setHasPaid: (val: boolean) => void}) {
	const [showModal, setShowModal] = useState(false);

	const handleApply = () => {
        setShowModal(true);
        
	};

	return (
		<TableCell>
			<Button onClick={handleApply} variant="outline" className="py-2">
				Apply
			</Button>
            <PaymentModal showModal={showModal} setShowModal={setShowModal} setHasPaid={setHasPaid} />
		</TableCell>
	);
}
