/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateHotelMutation
// ====================================================

export interface CreateHotelMutation {
  createHotel: boolean;
}

export interface CreateHotelMutationVariables {
  picture?: any | null;
  name: string;
  description: string;
  address: AddressInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FindHotelsQuery
// ====================================================

export interface FindHotelsQuery_findHotels_owner {
  id: string;
  email: string;
}

export interface FindHotelsQuery_findHotels {
  id: string;
  name: string;
  thumbnailUrl: string;
  owner: FindHotelsQuery_findHotels_owner;
}

export interface FindHotelsQuery {
  findHotels: FindHotelsQuery_findHotels[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: RegisterMutation
// ====================================================

export interface RegisterMutation_register {
  path: string;
  message: string;
}

export interface RegisterMutation {
  register: RegisterMutation_register[] | null;
}

export interface RegisterMutationVariables {
  email: string;
  password: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface AddressInput {
  lat: number;
  lng: number;
  line1?: string | null;
  line2?: string | null;
  city?: string | null;
  state?: string | null;
  country?: string | null;
  type?: string | null;
  zip?: string | null;
  formattedAddress?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
