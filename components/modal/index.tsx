"use client";

import { useEffect, useRef } from "react";
import { useForm } from "react-hook-form";

import * as z from "zod";
import { useGlobal } from "@/lib/store";
import { zodResolver } from "@hookform/resolvers/zod";

import gsap from "gsap";

const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre es requerido" }),
  email: z.string().email({ message: "Email inválido" }),
  checkInDate: z.string().refine((date) => new Date(date) >= new Date(), {
    message: "La fecha de check-in debe ser hoy o después",
  }),
  checkOutDate: z.string().refine((date) => new Date(date) > new Date(), {
    message: "La fecha de check-out debe ser después de hoy",
  }),
  origin: z.string().min(2, { message: "El origen es requerido" }),
});

type FormValues = z.infer<typeof formSchema>;

export default function Modal() {
  const { isModalOpen, setIsModalOpen, selectedValue, setSelectedValue } =
    useGlobal();
  const scroller = useGlobal((s) => s.scroller);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const modalContentRef = useRef<HTMLDivElement>(null);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      checkInDate: new Date().toISOString().split("T")[0],
      checkOutDate: new Date(Date.now() + 86400000).toISOString().split("T")[0],
      origin: "",
    },
  });

  useEffect(() => {
    if (isModalOpen && dialogRef.current && !dialogRef.current.open) {
      dialogRef.current.showModal();
      scroller?.stop();
      reset();

      if (modalContentRef.current) {
        gsap.set(modalContentRef.current, {
          opacity: 0,
          y: 30,
        });

        gsap.to(modalContentRef.current, {
          opacity: 1,
          y: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      }
    } else if (!isModalOpen && dialogRef.current && dialogRef.current.open) {
      if (modalContentRef.current) {
        scroller?.start();
        gsap.to(modalContentRef.current, {
          opacity: 0,
          y: -30,
          duration: 0.3,
          ease: "power2.in",
          onComplete: () => {
            if (dialogRef.current) {
              dialogRef.current.close();
            }
          },
        });
      } else {
        dialogRef.current.close();
      }
    }
  }, [isModalOpen, reset]);

  const handleDialogClose = () => {
    if (modalContentRef.current) {
      gsap.to(modalContentRef.current, {
        opacity: 0,
        y: -30,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          setIsModalOpen(false);
        },
      });
    } else {
      setIsModalOpen(false);
    }
  };

  const handleOptionSelect = (value: "doble" | "triple" | "matrimonial") => {
    setSelectedValue(value);
  };

  const getRoomTypeText = (type: "doble" | "triple" | "matrimonial" | null) => {
    switch (type) {
      case "doble":
        return "Habitación Simple";
      case "triple":
        return "Habitación Doble";
      case "matrimonial":
        return "Habitación Matrimonial";
      default:
        return "";
    }
  };

  const onSubmit = (data: FormValues) => {
    const reservationData = {
      ...data,
      roomType: selectedValue,
    };
    const checkInFormatted = new Date(data.checkInDate).toLocaleDateString(
      "es-ES"
    );
    const checkOutFormatted = new Date(data.checkOutDate).toLocaleDateString(
      "es-ES"
    );

    const checkIn = new Date(data.checkInDate);
    const checkOut = new Date(data.checkOutDate);
    const nights = Math.round(
      (checkOut.getTime() - checkIn.getTime()) / (1000 * 60 * 60 * 24)
    );

    const message = `
    *Nueva Reserva*
    Tipo: ${getRoomTypeText(selectedValue)}
    Nombre: ${data.name}
    Email: ${data.email}
    Llegada: ${checkInFormatted}
    Salida: ${checkOutFormatted}
    Noches: ${nights}
    Origen: ${data.origin}
        `.trim();

    const phoneNumber = "+5492262322434";

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    window.open(whatsappUrl, "_blank");
    setIsModalOpen(false);
  };

  return (
    <dialog
      ref={dialogRef}
      onClose={handleDialogClose}
      className="font-text backdrop:bg-black/50 backdrop:backdrop-blur-sm px-3 md:px-0 bg-transparent rounded-lg shadow-xl max-w-md w-full overflow-hidden"
    >
      <div ref={modalContentRef} className="bg-white rounded-lg">
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-bold">Reserva tu Habitación</h2>
            <button
              onClick={() => setIsModalOpen(false)}
              className="text-gray-500 hover:text-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Tipo de Habitación
              </label>
              <div className="flex items-center gap-2">
                <div className="flex items-center">
                  <input
                    type="radio"
                    id="doble"
                    name="roomType"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    checked={selectedValue === "doble"}
                    onChange={() => handleOptionSelect("doble")}
                    required
                  />
                  <label
                    htmlFor="doble"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Doble
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="matrimonial"
                    name="roomType"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    checked={selectedValue === "matrimonial"}
                    onChange={() => handleOptionSelect("matrimonial")}
                  />
                  <label
                    htmlFor="matrimonial"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Matrimonial
                  </label>
                </div>

                <div className="flex items-center">
                  <input
                    type="radio"
                    id="triple"
                    name="roomType"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500"
                    checked={selectedValue === "triple"}
                    onChange={() => handleOptionSelect("triple")}
                  />
                  <label
                    htmlFor="triple"
                    className="ml-2 block text-sm font-medium text-gray-700"
                  >
                    Triple
                  </label>
                </div>
              </div>
              {!selectedValue && (
                <p className="text-sm text-red-500">
                  Por favor seleccione un tipo de habitación
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre Completo
              </label>
              <input
                id="name"
                {...register("name")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                id="email"
                type="email"
                {...register("email")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="checkInDate"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de Llegada
              </label>
              <input
                id="checkInDate"
                type="date"
                {...register("checkInDate")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.checkInDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.checkInDate.message}
                </p>
              )}
            </div>

            <div>
              <label
                htmlFor="checkOutDate"
                className="block text-sm font-medium text-gray-700"
              >
                Fecha de Salida
              </label>
              <input
                id="checkOutDate"
                type="date"
                {...register("checkOutDate")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              />
              {errors.checkOutDate && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.checkOutDate.message}
                </p>
              )}
            </div>

            {/* Origin Field */}
            <div>
              <label
                htmlFor="origin"
                className="block text-sm font-medium text-gray-700"
              >
                ¿De dónde nos visitas?
              </label>
              <input
                id="origin"
                {...register("origin")}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                placeholder="Ciudad, País"
              />
              {errors.origin && (
                <p className="mt-1 text-sm text-red-500">
                  {errors.origin.message}
                </p>
              )}
            </div>

            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setIsModalOpen(false)}
                className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
              >
                Cancelar
              </button>
              <button
                type="submit"
                disabled={!selectedValue || isSubmitting}
                className="px-4 py-2 text-sm font-medium rounded-md hover:bg-blue-700 disabled:bg-blue-300 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Enviando..." : "Confirmar Reserva"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </dialog>
  );
}
