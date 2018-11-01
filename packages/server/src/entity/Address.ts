import {
  Entity,
  Column,
  BaseEntity,
  PrimaryGeneratedColumn,
  ManyToOne
} from "typeorm";
import { Hotel } from "./Hotel";

@Entity("address")
export class Address extends BaseEntity {
  @PrimaryGeneratedColumn("uuid")
  id: string;

  @Column("varchar", { length: 50, default: "active" })
  status: boolean;

  @Column("varchar", { length: 100, nullable: true })
  line1: string;

  @Column("varchar", { length: 100, nullable: true })
  line2: string;

  @Column("varchar", { length: 100, nullable: true })
  city: string;

  @Column("varchar", { length: 100, nullable: true })
  state: string;

  @Column("varchar", { length: 100, nullable: true })
  country: string;

  @Column("varchar", { length: 50, default: "contact", nullable: false })
  type: string;

  @Column("varchar", { length: 50, nullable: true })
  zip: string;

  @Column("double precision")
  lat: number;

  @Column("double precision")
  lng: number;

  @Column("text", { nullable: true })
  formattedAddress: string;

  @Column("text", { nullable: true })
  googlePlaceId: string;

  @ManyToOne(() => Hotel, hotel => hotel.address)
  hotel: Hotel;

  @Column("timestamp", {
    precision: 3,
    default: () => "CURRENT_TIMESTAMP(3)"
  })
  createdOn: Date;

  @Column("timestamp", {
    precision: 3,
    default: () => "CURRENT_TIMESTAMP(3)",
    onUpdate: "CURRENT_TIMESTAMP(3)"
  })
  updatedOn: Date;
}
