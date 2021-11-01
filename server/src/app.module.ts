import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { FileModule } from "./file/file.module";
import { TrackModule } from "./track/track.module";
import { ServeStaticModule } from '@nestjs/serve-static';
import * as path from 'path';

@Module({
    imports: [
        ServeStaticModule.forRoot({
            rootPath: path.resolve(__dirname, '..', 'client'),
        }),
        MongooseModule.forRoot('mongodb+srv://user:user@cluster0.tn4sn.mongodb.net/music-platform?retryWrites=true&w=majority'),
        TrackModule,
        FileModule
    ],
})

export class AppModule { };