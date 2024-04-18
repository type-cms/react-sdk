"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const useContent = ({ baseUrl, token, projectId }) => {
    const [content, setContent] = (0, react_1.useState)(null);
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const [isLoaded, setIsLoaded] = (0, react_1.useState)(false);
    const getEntries = (body) => __awaiter(void 0, void 0, void 0, function* () {
        setIsLoading(true);
        setIsLoaded(false);
        const response = yield fetch(`${baseUrl}/api/projects/${projectId}/content`, {
            method: "POST",
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(body),
        });
        const data = yield response.json();
        setContent(data);
        setIsLoading(false);
        setIsLoaded(true);
        return data;
    });
    return { content, isLoading, isLoaded, getEntries };
};
exports.default = useContent;
