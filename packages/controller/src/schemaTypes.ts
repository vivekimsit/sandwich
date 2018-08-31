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

//==============================================================
// END Enums and Input Objects
//==============================================================
