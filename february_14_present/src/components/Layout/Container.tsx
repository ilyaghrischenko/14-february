import React from 'react';

interface ContainerProps {
    children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
    return (
        <div className="min-h-[100dvh] w-full matrix-bg flex items-center justify-center p-4 sm:p-6 md:p-8">
            <div className="w-full max-w-2xl">
                {children}
            </div>
        </div>
    );
};