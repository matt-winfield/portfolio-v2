export const startOfCareer = new Date('2018-09-03');

export type Experience = {
    id: string;
    title: string;
    company: string;
    startDate: Date;
    endDate?: Date;
};

export const experience: Experience[] = [
    {
        id: 'l2-software-developer-derivco-sports',
        title: 'L2 Software Developer',
        company: 'Derivco Sports',
        startDate: new Date('2022-05-19T00:00:00.000Z'),
        endDate: undefined,
    },
    {
        id: 'l1-software-developer-derivco-sports',
        title: 'L1 Software Developer',
        company: 'Derivco Sports',
        startDate: new Date('2021-03-08T00:00:00.000Z'),
        endDate: new Date('2022-05-19T00:00:00.000Z'),
    },
    {
        id: 'apprentice-software-developer-derivco-sports',
        title: 'Apprentice Software Developer',
        company: 'Derivco Sports',
        startDate: new Date('2018-09-03T00:00:00.000Z'),
        endDate: new Date('2021-03-08T00:00:00.000Z'),
    },
    {
        id: 'software-development-internship-derivco-sports',
        title: 'Software Development Internship',
        company: 'Derivco Sports',
        startDate: new Date('2017-07-03T00:00:00.000Z'),
        endDate: new Date('2017-08-18T00:00:00.000Z'),
    },
];
