// faker module to generate data
import { faker } from '@faker-js/faker';

// types
import type { GPerson } from '@/types';

function getMockedPersons(randomDataLength: number): GPerson[] {
    const result: GPerson[] = [];

    for (let i = 0; i < randomDataLength; i++) {
        const mockPerson: GPerson = {
            _id: faker.datatype.uuid(),
            names: [{ displayName: faker.name.fullName()}],
            emailAddresses: [{ value: faker.internet.email() }],
            phoneNumbers: [{ value: faker.phone.number() }]
        };
        result.push(mockPerson);
    }

    return result;
};

export const mockedPersons: GPerson[] = getMockedPersons(10);
