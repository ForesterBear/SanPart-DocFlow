import { Request, Response } from 'express';
import fs from 'fs';
import path from 'path';

const logFilePath = path.join(__dirname, 'audit.log');

export const logAction = (req: Request, action: string) => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
    user: req.user && req.user.username ? req.user.username : 'Guest',
        action: action,
    };

    fs.appendFile(logFilePath, JSON.stringify(logEntry) + '\n', (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });
};

export const getAuditLogs = (): Promise<string[]> => {
    return new Promise((resolve, reject) => {
        fs.readFile(logFilePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            const logs = data.trim().split('\n').map(line => JSON.parse(line));
            resolve(logs);
        });
    });
};