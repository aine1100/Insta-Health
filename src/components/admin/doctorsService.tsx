
export const DoctorService = {
    // Simulates an API call to fetch doctor data
    getDoctor: async () => {
        // Mocked doctor data
        const doctors = [
            {
                id: 1,
                name: 'Dr. John Doe',
                image: '/patient.jpg',
                age: 45,
                Department: 'Neurologist',
                rating: 4.5,
            },
            {
                id: 2,
                name: 'Dr. Jane Smith',
                image: '/patient.jpg',
                age: 50,
                Department: 'Cardiologist',
                rating: 4.7,
            },
            {
                id: 3,
                name: 'Dr. Robert Brown',
                image: '/patient.jpg',
                age: 38,
                Department: 'Orthopedist',
                rating: 4.2,
            },
        ];

        // Simulating a delay for an asynchronous request
        return new Promise((resolve) => {
            setTimeout(() => resolve(doctors), 1000);
        });
    },
};
