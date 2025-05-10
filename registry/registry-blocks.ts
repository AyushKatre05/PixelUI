import type { Registry } from "./schema";

export const block: Registry = [
    {
        name: "ai-card-generation",
        type: "registry:block",
        dependencies: ["lucide-react"],
        registryDependencies: ["button", "input", "select", "textarea"],
        files: [
            {
                path: "components/pixelui/blocks/ai-card-generation/ai-card-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/pixelui/blocks/ai-card-generation/header-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/pixelui/blocks/ai-card-generation/form-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/pixelui/blocks/ai-card-generation/settings-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/pixelui/blocks/ai-card-generation/preview-generation.tsx",
                type: "registry:component",
            },
            {
                path: "components/pixelui/blocks/ai-card-generation/error-generation.tsx",
                type: "registry:component",
            },
        ],
    },
    {
        name: "ai-chat",
        type: "registry:block",
        dependencies: ["lucide-react", "motion"],
        registryDependencies: ["button", "input", "textarea"],
        files: [
            {
                path: "components/pixelui/blocks/ai-chat/ai-chat.tsx",
                type: "registry:component",
            },
            {
                path: "components/pixelui/blocks/ai-chat/multimodal-input.tsx",
                type: "registry:component",
            },
        ],
    },
];
