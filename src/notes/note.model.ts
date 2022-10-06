import { Table,
    Model, 
    Column, 
    ForeignKey, 
    HasMany, 
    IsUUID, 
    PrimaryKey,
    BelongsTo, 
} from 'sequelize-typescript';


@Table({
    timestamps: false
})
export class Category extends Model {
    @PrimaryKey
    @Column
    id: number;

    @Column({ allowNull: false })
    name: string;

    @HasMany(() => Note)
    notes: Note[]
}


@Table({
    updatedAt: false
})
export class Note extends Model {
    @IsUUID(4)
    @PrimaryKey
    @Column
    id: string;

    @Column({ allowNull: false })
    name: string;

    @Column({ allowNull: false })
    content: string;

    @ForeignKey(() => Category)
    @Column({ allowNull: false })
    CategoryId: number;

    @BelongsTo(() => Category)
    Category: Category

    @Column({ 
        allowNull: false,
        defaultValue: false
    })
    isArchived: boolean;
}