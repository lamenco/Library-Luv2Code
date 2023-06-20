class MessageModel {
    id?: number;
    title: string;
    question: string;
    userEmail?: string;
    adminEmail?: string;
    response?: string;
    close?: boolean;

    constructor(question: string, title: string) {
        this.question = question;
        this.title = title;

    }
}

export default MessageModel;