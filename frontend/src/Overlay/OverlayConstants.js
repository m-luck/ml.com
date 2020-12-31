// CALL-TO-ACTIONS

const LEARN_MORE = "LEARN MORE";
const PURCHASE = "PURCHASE";


// COORDINATES 

const CALI_COORDS = "[34.2, -118.6]";
const NEW_YORK_COORDS = "[40.6, -73.9]";

// PROJECT TYPES

const CODE_PROJECT = "CODE_PROJECT";
const HARDWARE_PROJECT = "HARDWARE_PROJECT";
const LIFESTYLE_PROJECT = "LIFESTYLE_PROJECT";

// FLAIR TYPES

export const COLLABORATION = "COLLABORATION";
export const COMPUTER_VISION = "COMPUTER_VISION";
export const DATA_SCIENCE = "DATA_SCIENCE";
export const EXPRESS = "EXPRESS";
export const MACHINE_LEARNING = "MACHINE_LEARNING";
export const NATURAL_LANGUAGE_PROCESSING = "NATURAL_LANGUAGE_PROCESSING";
export const PYTHON = "PYTHON";
export const PYTORCH = "PYTORCH";
export const REACT = "REACT";
export const STRIPE = "STRIPE";

const FUNC_GO_TO = "goTo";


// ITEM INFO

export const LIPNET_INFO = {
    buttonText: LEARN_MORE,
    cId: "lipnet",
    flairsList: [PYTHON, PYTORCH, DATA_SCIENCE, MACHINE_LEARNING, COLLABORATION, COMPUTER_VISION, NATURAL_LANGUAGE_PROCESSING],
    func: FUNC_GO_TO,
    funcArgs: NEW_YORK_COORDS,
    itemDesc: "Using predictive language modeling to assist lip reading vision networks.",
    itemName:"DeepLipReadng", 
    itemSub: "LipNet + GPT = lipreading network",
    infoHTML: `
        <h3>
            Deep Lip Reading
        </h3>
        <p>
            A new machine learning experiment,
            deep lip reading combines both computer vision models
            and natural language processing to predict speech.
        </p>
        <p>
            Using a dataset which has self-referencing transcriptions, we can train a vision network to recognize utterances and export construct words.
            Concatenating output of next-word prediction from GPT2, we can have the network take advantage of semantic insights to improve its overall prediction. 
        </p>
    `,
    projectTypes: [CODE_PROJECT],
}

export const TIMEHERE_INFO = {
    buttonText: PURCHASE,
    cId: "th",
    flairsList: [
        EXPRESS,
        PYTHON,
        REACT,
        STRIPE,
    ],
    func: FUNC_GO_TO,
    funcArgs: {CALI_COORDS},
    itemDesc: "A generated document to preserve life's values and stories. For those you wish to know more.",
    itemName: "TimeHere",
    itemSub: "For my mother.",
    infoHTML: `
        <h3>TimeHere</h3>
            <p>Visit the site for more info.</p>"
        />
    `,
    projectTypes: [CODE_PROJECT],
}

export const AOEAI_INFO = {
    buttonText: LEARN_MORE,
    cId: "aoeai",
    func: FUNC_GO_TO,
    funcArgs: NEW_YORK_COORDS,
    itemDesc: "Set of internally trained CNNs to recognize units to bootstrap a reinforcement learning agent to play AOE.",
    itemName: "AlphaEmpires", 
    itemSub: "The grassroots Age of Empires AI.",
    infoHTML: `
        <h3>AlphaEmpires</h3>
        <p>Introducing the world's first machine learning platform for Age of Empires.</p>"
    `,
    projectTypes: [CODE_PROJECT],
}

export const NNGPU_INFO = {
    cId: "nngpu",
    func: FUNC_GO_TO,
    funcArgs: NEW_YORK_COORDS,
    itemDesc: "A parallelized implementation of spiking neural networks using NVIDIA CUDA.",
    itemName: "Spiking Izkevich Networks on CUDA", 
    itemSub: "SNNs on GPUs.",
    projectTypes: [CODE_PROJECT],
}

export const THIS_SITE_INFO = {
    cId: "thissite",
    buttonText: "LEARN MORE",
    itemName: "michaellukiman.com",
    itemSub: "A new site.",
    itemDesc: "Time to make things more detailed.",
    func: FUNC_GO_TO,
    funcArgs: NEW_YORK_COORDS,
    flairsList: [
        EXPRESS,
        REACT,
    ],
    infoHTML: `
        <h3>
            michaellukiman.com
        </h3>
        <p>
            When I was 14 years old, my website looked good. Then it looked great. Then, I made it pure HTML.
        </p>
        <p>
            'Why did I leave it like that?', I thought to myself.
        </p>
    `,
}
