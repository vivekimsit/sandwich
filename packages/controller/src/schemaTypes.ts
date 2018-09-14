/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: MeQuery
// ====================================================

export interface MeQuery_me {
  email: string;
}

export interface MeQuery {
  me: MeQuery_me | null;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: CreateAddressMutation
// ====================================================

export interface CreateAddressMutation {
  createAddress: boolean;
}

export interface CreateAddressMutationVariables {
  input: CreateAddressInput;
}

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
// GraphQL mutation operation: CreateRoomMutation
// ====================================================

export interface CreateRoomMutation {
  createRoom: boolean;
}

export interface CreateRoomMutationVariables {
  input: CreateRoomInput;
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
// GraphQL mutation operation: LogoutMutation
// ====================================================

export interface LogoutMutation {
  logout: boolean | null;
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
// GraphQL mutation operation: UpdateAddressMutation
// ====================================================

export interface UpdateAddressMutation {
  updateAddress: boolean;
}

export interface UpdateAddressMutationVariables {
  addressId: string;
  input: UpdateAddressInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateHotelMutation
// ====================================================

export interface UpdateHotelMutation {
  updateHotel: boolean;
}

export interface UpdateHotelMutationVariables {
  hotelId: string;
  input: UpdateHotelInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: UpdateRoomMutation
// ====================================================

export interface UpdateRoomMutation {
  updateRoom: boolean;
}

export interface UpdateRoomMutationVariables {
  roomId: string;
  input: UpdateRoomInput;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewAddressQuery
// ====================================================

export interface ViewAddressQuery_viewAddress_hotel {
  id: string;
  name: string;
}

export interface ViewAddressQuery_viewAddress {
  id: string;
  lat: number;
  lng: number;
  line1: string | null;
  line2: string | null;
  state: string | null;
  city: string | null;
  country: string | null;
  hotel: ViewAddressQuery_viewAddress_hotel;
}

export interface ViewAddressQuery {
  viewAddress: ViewAddressQuery_viewAddress | null;
}

export interface ViewAddressQueryVariables {
  id: string;
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

export interface ViewHotelQuery_viewHotel_address {
  lat: number;
  lng: number;
}

export interface ViewHotelQuery_viewHotel_rooms {
  id: string;
  name: string;
  description: string;
  price: number;
  beds: number;
  thumbnailUrl: string | null;
}

export interface ViewHotelQuery_viewHotel {
  id: string;
  name: string;
  description: string;
  thumbnailUrl: string;
  owner: ViewHotelQuery_viewHotel_owner | null;
  address: ViewHotelQuery_viewHotel_address | null;
  rooms: ViewHotelQuery_viewHotel_rooms[] | null;
}

export interface ViewHotelQuery {
  viewHotel: ViewHotelQuery_viewHotel | null;
}

export interface ViewHotelQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ViewRoomQuery
// ====================================================

export interface ViewRoomQuery_viewRoom_hotel {
  id: string;
  name: string;
}

export interface ViewRoomQuery_viewRoom {
  id: string;
  name: string;
  description: string;
  price: number;
  beds: number;
  thumbnailUrl: string | null;
  hotel: ViewRoomQuery_viewRoom_hotel;
}

export interface ViewRoomQuery {
  viewRoom: ViewRoomQuery_viewRoom | null;
}

export interface ViewRoomQueryVariables {
  id: string;
}

/* tslint:disable */
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export interface CreateAddressInput {
  hotelId: string;
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

export interface CreateAmenityInput {
  id: string;
}

export interface CreateRoomInput {
  hotelId: string;
  name: string;
  picture?: any | null;
  category: string;
  description: string;
  price: number;
  beds: number;
  guests: number;
  amenities?: CreateAmenityInput[] | null;
}

export interface UpdateAddressInput {
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

export interface UpdateAmenityInput {
  id: string;
}

export interface UpdateHotelInput {
  name?: string | null;
  picture?: any | null;
  thumbnailUrl?: string | null;
  category?: string | null;
  description?: string | null;
  address?: UpdateAddressInput | null;
}

export interface UpdateRoomInput {
  name?: string | null;
  picture?: any | null;
  thumbnailUrl?: string | null;
  category?: string | null;
  description?: string | null;
  price?: number | null;
  beds?: number | null;
  guests?: number | null;
  amenities?: UpdateAmenityInput[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
