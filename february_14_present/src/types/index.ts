export interface Level {
    id: number;
    question: string;
    answer: string;
    hint: string;
    errorMessage: string;
}

export interface GameState {
    currentLevel: number;
    attemptCount: number;
    showHint: boolean;
    isComplete: boolean;
    messages: Message[];
}

export interface Message {
    id: string;
    text: string;
    type: 'system' | 'error' | 'success' | 'info';
    timestamp: number;
}

export type GamePhase = 'boot' | 'playing' | 'complete';