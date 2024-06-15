'use client';
import { useState, useEffect } from "react";
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export default function LanguageSwitcher() {
    const [isPending, startTransition] = useTransition();
    const router = useRouter();
    const localActive = useLocale();

    // Initialize isChecked based on the active locale
    const [isChecked, setIsChecked] = useState(localActive === 'en');

    // Effect to update isChecked when localActive changes
    useEffect(() => {
        setIsChecked(localActive === 'en');
    }, [localActive]);

    const onSelectChange = () => {
        const newCheckedState = !isChecked;
        setIsChecked(newCheckedState);

        const nextLocale = newCheckedState ? "en" : "pl";
        startTransition(() => {
            router.replace(`/${nextLocale}`);
        });
    };

    return (
        <>
            <label className='themeSwitcherTwo relative inline-flex cursor-pointer select-none items-center'>
                <input
                    type='checkbox'
                    checked={isChecked}
                    onChange={onSelectChange}
                    className='sr-only'
                    disabled={isPending}
                />
                <span className='label flex items-center text-sm font-medium text-black'>
                    PL
                </span>
                <span
                    className={`slider mx-4 flex h-8 w-[60px] items-center rounded-full p-1 duration-200 ${
                        isChecked ? 'bg-[#212b36]' : 'bg-[#CCCCCE]'
                    }`}
                >
                    <span
                        className={`dot h-6 w-6 rounded-full bg-white duration-200 ${
                            isChecked ? 'translate-x-[28px]' : ''
                        }`}
                    ></span>
                </span>
                <span className='label flex items-center text-sm font-medium text-black'>
                    EN
                </span>
            </label>
        </>
    );
}
