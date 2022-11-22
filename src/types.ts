interface Name {
    displayName: string;
    displayNameLastFirst?: string;
    unstructuredName?: string;
    familyName?: string;
    givenName?: string;
    middleName?: string;
    honorificPrefix?: string;
    honorificSuffix?: string;
    phoneticFullName?: string;
    phoneticFamilyName?: string;
    phoneticGivenName?: string;
    phoneticMiddleName?: string;
    phoneticHonorificPrefix?: string;
    phoneticHonorificSuffix?: string
};

interface Email {
    value: string;
    type?: string;
    formattedType?: string;
    displayName?: string;
};

interface Phone {
    value?: string;
    canonicalForm?: string;
    type?: string;
    formattedType?: string;
};

export interface GPerson {
    _id: string;
    names: Name[];
    emailAddresses: Email[];
    phoneNumbers: Phone[];
};
