"use client";

import dynamic from "next/dynamic";
import React from "react";

const Calendly = dynamic(() => import("./booking"), {
    ssr: false,
    loading: () => null,
});

const Testimonials = dynamic(() => import("./testimonials"), {
    ssr: false,
    loading: () => null,
});

export default function ClientSections() {
    return (
        <>
            <Testimonials />
            <Calendly />
        </>
    );
}

