"use client";

import { useState, FormEvent } from "react";
import indiaData from "@/app/data/indianstatescities.json"
import { error } from "console";

export default function FreelancerRegistration() {
    const [errors, setErrors] = useState<any>({});
    const [loading, setLoading] = useState(false);

    const [form, setForm] = useState({
        name: "",
        phone: "",
        email: "",
        skills: "",
        state: "",
        city: "",
        resume: null as File | null,
        terms: false
    });

    const states = Object.keys(indiaData);

    const cities =
        form.state && indiaData[form.state as keyof typeof indiaData]
            ? indiaData[form.state as keyof typeof indiaData]
            : [];

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        const newErrors: any = {};

        if (!form.name) newErrors.name = "Name is required";
        if (!form.phone) newErrors.phone = "Phone number is required";
        if (!form.email) newErrors.email = "Email is required";
        if (!form.skills) newErrors.skills = "Skills are required";
        if (!form.state) newErrors.state = "Select a state";
        if (!form.city) newErrors.city = "Select a city";
        if (!form.resume) newErrors.resume = "Upload your resume (PDF)";
        if (!form.terms) newErrors.terms = "You must accept Terms & Conditions";

        setErrors(newErrors);

        if (Object.keys(newErrors).length > 0) return; // stop submit if errors exist

        setLoading(true);


        //backend Logic
        
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("skills", form.skills);
    formData.append("state", form.state);
    formData.append("city", form.city);

    if (form.resume) {
      formData.append("resume", form.resume);
    }

    try {
        const res = await fetch("/api/freelancer/apply",{
            method: "POST",
            body: formData,
        });

        if (!res.ok) {
      const data = await res.json();
      throw new Error(data.error || "Something went wrong");
    }

        // success
        setForm({name: "",
        phone: "",
        email: "",
        skills: "",
        state: "",
        city: "",
        resume: null as File | null,
        terms: false});

    }catch(err:any){
        setErrors(err.message);
    }finally{
        setLoading(false);
    }
};

    return (
        <div className="bg-[#050816] min-h-screen flex items-center justify-center px-4 py-16">

            <section className="relative w-full max-w-5xl rounded-3xl border border-slate-800/70 bg-gradient-to-r from-[#050816] via-[#0A1A2F] to-[#0F4C5C] px-6 py-10 md:px-10 md:py-14 shadow-[0_20px_60px_rgba(0,0,0,0.75)]">

                <div className="pointer-events-none absolute -top-10 right-4 h-32 w-32 rounded-full bg-[#06B6D4]/30 blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-40 w-40 rounded-full bg-[#FACC15]/18 blur-3xl" />

                <div className="relative grid gap-10 md:grid-cols-2">

                    <div className="space-y-4">
                        <p className="text-xs font-semibold uppercase tracking-[0.45em] text-slate-300/90">
                            Freelancer Registration
                        </p>

                        <h2 className="text-3xl md:text-4xl font-semibold leading-tight text-slate-50">
                            Become a
                            <span className="block bg-gradient-to-r from-[#06B6D4] via-[#E5E7EB] to-[#FACC15] bg-clip-text text-transparent">
                                Verified Freelancer
                            </span>
                        </h2>

                        <p className="text-sm md:text-base text-slate-300 max-w-xl">
                            Create your account, upload resume, choose your location & showcase your skills.
                        </p>
                    </div>

                    <div className="bg-[#020617]/70 rounded-2xl border border-slate-800/60 p-6 md:p-8">

                        <form onSubmit={handleSubmit} className="space-y-4">

                            <Input label="Name" value={form.name} error={errors.name} onChange={(e: any) => setForm({ ...form, name: e.target.value })} />

                            <Input label="Phone No." value={form.phone} error={errors.phone} onChange={(e: any) => setForm({ ...form, phone: e.target.value })} />

                            <Input label="Email" type="email" value={form.email} error={errors.email} onChange={(e: any) => setForm({ ...form, email: e.target.value })} />



                            <Input label="Skills" placeholder="Web Design, SEO, MERN" value={form.skills} error={errors.skills} onChange={(e: any) => setForm({ ...form, skills: e.target.value })} />

                            {/* STATE */}
                            <Select
                                label="State"
                                value={form.state}
                                options={states}
                                error={errors.state}
                                onChange={(e: any) =>
                                    setForm({ ...form, state: e.target.value, city: "" })
                                }
                            />

                            {/* CITY  */}
                            <Select
                                label="City"
                                value={form.city}
                                options={cities}
                                disabled={!form.state}
                                error={errors.city}
                                onChange={(e: any) =>
                                    setForm({ ...form, city: e.target.value })
                                }
                            />

                            <div className="space-y-1">
                                <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                                    Upload Resume (PDF only)
                                </label>

                                <input
                                    type="file"
                                    accept="application/pdf"
                                    onChange={(e) =>
                                        setForm({ ...form, resume: e.target.files?.[0] ?? null })

                                    }
                                    className="text-slate-200 text-sm"
                                />
                            </div>

                            <label className="flex gap-2 text-slate-300 text-sm">
                                <input type="checkbox" onChange={(e) => setForm({ ...form, terms: e.target.checked })} />
                                I accept the Terms & Conditions
                            </label>

                            <button
                                type="submit"
                                disabled={loading}
                                className="mt-2 w-full rounded-full bg-[#06B6D4] py-2.5 text-sm font-semibold text-[#020617] hover:bg-[#0ad2f5] transition-colors disabled:opacity-60"
                            >
                                {loading ? "Registering..." : "Register"}
                            </button>

                            <p className="text-center text-slate-400 text-sm">
                                Already have an account? <span className="text-[#06B6D4] cursor-pointer">Login</span>
                            </p>

                        </form>
                    </div>
                </div>
            </section>
        </div>
    );
}

/*
 ---------- Reusable components ---------- 
 Input and Select 

*/

function Input({ label, name, error, ...props }: any) {
    return (
        <div className="space-y-1">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {label}
            </label>

            <input
                {...props}
                className={`w-full rounded-xl border px-3 py-2 text-sm bg-[#020617] text-slate-100 placeholder:text-slate-500 focus:outline-none 
          ${error ? "border-red-500 focus:ring-red-500" : "border-slate-700 focus:ring-[#06B6D4]/70"}`}
            />

            {error && <p className="text-red-400 text-xs">{error}</p>}
        </div>
    );
}

function Select({ label, error, options, ...props }: any) {
    return (
        <div className="space-y-1">
            <label className="block text-xs font-medium uppercase tracking-[0.18em] text-slate-400">
                {label}
            </label>

            <select
                {...props}
                className={`w-full rounded-xl border px-3 py-2 text-sm bg-[#020617] text-slate-100
          ${error ? "border-red-500 focus:ring-red-500" : "border-slate-700 focus:ring-[#06B6D4]/70"}`}
            >
                <option value="">Select {label}</option>
                {options.map((o: string) => (
                    <option key={o}>{o}</option>
                ))}
            </select>

            {error && <p className="text-red-400 text-xs">{error}</p>}
        </div>
    );
}
