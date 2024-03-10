import { StaticImageData } from "next/image";
import { ReactNode } from "react";

export type NavLinkProps = {
    id: number;
    url: string;
    label: string;
};

export type headerProps = {
    title: string;
    bgImgClasses?: string | null;
    description?: string | null;
    navLinks?: NavLinkProps[];
};

export type motionProps = {
    children: ReactNode;
    i?: number | string;
    className?: string;
};

export type faqType = {
    id: number;
    question: string;
    answer: string;
};

export type counterElementType = {
    style: string;
    counterNumber: number;
    sizeText?: string;
};

export type ModalProps = {
    isOpen: boolean;
    closeModal: () => void;
    children: ReactNode;
}

export type userType = {
    name: string;
    email: string;
};

export type blogType = {
    id: string | number;
    author: string;
    authImg: string;
    title: string;
    image: string | StaticImageData;
    details: string;
    views: number;
    publish: string;
};

export type categoryType = {
    id: string | number;
    title: string;
    image: string | StaticImageData; // Assuming the image is a string URL
    details: string;
};

export type yachtType = {
    id: string | number;
    category: string;
    title: string;
    image: string[] | StaticImageData[]; // Assuming the image paths are string
    guests: number;
    rating: number;
    length: number;
    size: number;
    cabin: number;
    details: string;
    boatType: string;
    price: number;
}




