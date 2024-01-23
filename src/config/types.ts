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
    authImage: string | StaticImageData,
    bio: string;
    socialLinks: string[];
};

export type gameType = {
    id: number;
    category: string;
    title: string;
    image: string | StaticImageData;
    gameSceneImages: string[] | StaticImageData[];
    tutorialVideo: string;
    installs: number;
    reviews: number;
    us: number;
    details: string;
    playStore: string;
    appleStore: string;
};

export type JobType = {
    id: number | string;
    type: string;
    title: string;
    details: string;
    responsibilities: string;
    requirementsDetails: string;
    keyRequirements: string[];
    address: string;
    openings: number;
};

export type blogType = {
    id: string | number;
    author: userType;
    category: string;
    title: string;
    image: string | StaticImageData; // Assuming the image is a string URL
    details: string;
    publish: string;
};





