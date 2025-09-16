import { DataSource } from 'typeorm';

export const databaseProviders = [
    {
        provide: 'DATA_SOURCE',
        useFactory: async () => {
            const dataSource = new DataSource({
                type: 'oracle',
                host: '187.17.169.253',
                port: 1521,
                username: 'C##BRIBND2_CHRISTIAN',
                password: 'BI3032647',
                serviceName: 'XE',
                entities: [__dirname + '/../**/*.entity{.ts,.js}'],
                synchronize: false,
                logging: true,
            });

            return dataSource.initialize();
        },
    },
];
