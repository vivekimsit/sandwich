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
  description: string;
  owner: FindHotelsQuery_findHotels_owner | null;
}

export interface FindHotelsQuery {
  findHotels: FindHotelsQuery_findHotels[];
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: LoginMutation
// ====================================================

export interface LoginMutation_login_errors {
  path: string;
  message: string;
}

export interface LoginMutation_login {
  errors: LoginMutation_login_errors[] | null;
  sessionId: string | null;
}

export interface LoginMutation {
  login: LoginMutation_login;
}

export interface LoginMutationVariables {
  email: string;
  password: string;
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

// ====================================================
// GraphQL query operation: ViewHotelQuery
// ====================================================

export interface ViewHotelQuery_viewHotel_owner {
  id: string;
  email: string;
}

export interface ViewHotelQuery_viewHotel {
  id: string;
  name: string;
  description: string;
  owner: ViewHotelQuery_viewHotel_owner | null;
}

export interface ViewHotelQuery {
  viewHotel: ViewHotelQuery_viewHotel | null;
}

export interface ViewHotelQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

//==============================================================
// END Enums and Input Objects
//==============================================================
