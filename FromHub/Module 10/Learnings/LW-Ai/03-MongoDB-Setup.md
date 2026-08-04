# Phase 3: MongoDB Setup

## Installation

- MongoDB Community Server v8.3.7 installed
- Path: `C:\Program Files\MongoDB\Server\8.3\bin\`
- Added to user PATH

## Service

- Runs as Windows service (automatic start)
- Currently: Running
- Start/Stop: PowerShell as Admin → `Start-Service MongoDB` / `Stop-Service MongoDB`

## mongosh (Shell)

- Version: 2.9.2
- Local: `mongosh` (connects to localhost:27017)
- Atlas: `mongosh "mongodb+srv://cluster0.u1kedal.mongodb.net/" --username royjack032_db_user`

## Basic Commands

| Command                       | Purpose                        |
| ----------------------------- | ------------------------------ |
| `show dbs`                    | List databases                 |
| `use dbname`                  | Switch/create database         |
| `show collections`            | List collections in current db |
| `db.collection.insertOne({})` | Insert document                |
| `db.collection.find()`        | Read documents                 |
