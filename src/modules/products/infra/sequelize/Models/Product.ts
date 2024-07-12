import { AutoIncrement, BelongsTo, Column, CreatedAt, ForeignKey, Model, PrimaryKey, Table, UpdatedAt } from "sequelize-typescript";
import { User } from "../../../../accounts/infra/sequelize/models/User";

@Table
class Product extends Model {
  @PrimaryKey
  @AutoIncrement
  @Column
  id: number;

  @Column
  name: string;

  @Column
  description: string;

  @ForeignKey(() => User)
  @Column
  userId: number;

  @BelongsTo(() => User)
  user: User;

  @Column
  price: number;

  @CreatedAt
  createdAt: Date;

  @UpdatedAt
  updatedAt: Date;
}
export { Product }