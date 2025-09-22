"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAuditLogs = exports.logAction = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const logFilePath = path_1.default.join(__dirname, 'audit.log');
const logAction = (req, action) => {
    const logEntry = {
        timestamp: new Date().toISOString(),
        method: req.method,
        url: req.originalUrl,
        user: req.user && req.user.username ? req.user.username : 'Guest',
        action: action,
    };
    fs_1.default.appendFile(logFilePath, JSON.stringify(logEntry) + '\n', (err) => {
        if (err) {
            console.error('Failed to write to log file:', err);
        }
    });
};
exports.logAction = logAction;
const getAuditLogs = () => {
    return new Promise((resolve, reject) => {
        fs_1.default.readFile(logFilePath, 'utf8', (err, data) => {
            if (err) {
                return reject(err);
            }
            const logs = data.trim().split('\n').map(line => JSON.parse(line));
            resolve(logs);
        });
    });
};
exports.getAuditLogs = getAuditLogs;
