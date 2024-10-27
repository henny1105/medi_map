"use client";

import React, { useEffect, useState } from 'react';

interface Pharmacy {
  dutyName: string;
  dutyAddr: string;
  dutyTel1: string;
  dutyTime1s?: string;
  dutyTime1c?: string;
  dutyTime2s?: string;
  dutyTime2c?: string;
  dutyTime3s?: string;
  dutyTime3c?: string;
  dutyTime4s?: string;
  dutyTime4c?: string;
  dutyTime5s?: string;
  dutyTime5c?: string;
  dutyTime6s?: string;
  dutyTime6c?: string;
  dutyTime7s?: string;
  dutyTime7c?: string;
  wgs84Lat: number;
  wgs84Lon: number;
  [key: string]: string | number | undefined;
}


function formatTime(time: string | number): string {
  const timeStr = time.toString().padStart(4, '0');
  const hours = timeStr.slice(0, 2);
  const minutes = timeStr.slice(2);
  return `${hours}:${minutes}`;
}

export default function PharmacyPage() {
  const [pharmacies, setPharmacies] = useState<Pharmacy[]>([]);
  const [location, setLocation] = useState<{ lat: number; lng: number } | null>(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        }),
        (error) => console.error("Failed to get location:", error)
      );
    }
  }, []);

  useEffect(() => {
    if (location) {
      fetch(`/api/pharmacies?lat=${location.lat}&lng=${location.lng}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data?.item)) {
            setPharmacies(data.item);
          } else {
            console.error("Unexpected data structure or no data available:", data);
          }
        })
        .catch((error) => console.error("Failed to fetch pharmacy data:", error));
    }
  }, [location]);

  const days = [
    { name: "월요일", start: "dutyTime1s", close: "dutyTime1c" },
    { name: "화요일", start: "dutyTime2s", close: "dutyTime2c" },
    { name: "수요일", start: "dutyTime3s", close: "dutyTime3c" },
    { name: "목요일", start: "dutyTime4s", close: "dutyTime4c" },
    { name: "금요일", start: "dutyTime5s", close: "dutyTime5c" },
    { name: "토요일", start: "dutyTime6s", close: "dutyTime6c" },
    { name: "일요일", start: "dutyTime7s", close: "dutyTime7c" },
  ];

  return (
    <div>
      <h2 className='title'>약국 찾기</h2>
      {pharmacies.length > 0 ? (
        <ul>
          {pharmacies.map((pharmacy, index) => (
            <li key={index}>
              <h2>{pharmacy.dutyName.trim()}</h2>
              <p>주소: {pharmacy.dutyAddr}</p>
              <p>전화번호: {pharmacy.dutyTel1}</p>
              <div>
                <strong>영업 시간:</strong>
                <ul>
                  {days.map((day) => {
                    const openTime = pharmacy[day.start as keyof Pharmacy];
                    const closeTime = pharmacy[day.close as keyof Pharmacy];
                    return openTime && closeTime ? (
                      <li key={day.name}>
                        {day.name}: {formatTime(openTime)} - {formatTime(closeTime)}
                      </li>
                    ) : null;
                  })}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>로딩중...</p>
      )}
    </div>
  );
}
