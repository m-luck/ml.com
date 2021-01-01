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

export const ANSIBLE = "ANSIBLE";
export const BIOLOGY = "BIOLOGY";
export const COLLABORATION = "COLLABORATION";
export const COMPUTER_VISION = "COMPUTER_VISION";
export const DATA_SCIENCE = "DATA_SCIENCE";
export const DEVOPS = "DEVOPS";
export const EMBEDDED_SYSTEMS = "EMBEDDED_SYSTEMS";
export const EXPRESS = "EXPRESS";
export const KUBERNETES = "KUBERNETES";
export const MACHINE_LEARNING = "MACHINE_LEARNING";
export const MECHANICS = "MECHANICS";
export const NATURAL_LANGUAGE_PROCESSING = "NATURAL_LANGUAGE_PROCESSING";
export const NETWORKING = "NETWORKING";
export const PYTHON = "PYTHON";
export const PYTORCH = "PYTORCH";
export const REACT = "REACT";
export const STRIPE = "STRIPE";
export const THREED_PRINTING = "3D_PRINTING";

const FUNC_GO_TO = "goTo";


// ITEM INFO

export const items = [
    {
        buttonText: LEARN_MORE,
        cId: "pi",
        flairsList: [
            NETWORKING,
            PYTHON,
            DEVOPS,
            KUBERNETES,
            ANSIBLE,
        ],
        func: FUNC_GO_TO,
        funcArgs: CALI_COORDS,
        itemDesc: "The little engine that could.",
        itemName: "Panzer", 
        itemSub: "A Homelab Cluster",
        infoHTML: `
            <h3>
                Panzer
            </h3>
            <p>
                Originally four nodes, this homelab consists of a NETGEAR switch and is deployed using ANSIBLE, and monitored with Grafana. The rig is used to run parallel data scraping, custom API endpoints, and stock monitoring. More planned projects are downstream of this one, including a decision-making program for automated and quick product generation based on emergent memes (stay tuned for what this is).
            </p>
        `,
        projectTypes: [CODE_PROJECT, HARDWARE_PROJECT],
    },
    {
        buttonText: LEARN_MORE,
        cId: "cornlapse",
        flairsList: [
            NETWORKING,
            BIOLOGY,
        ],
        func: FUNC_GO_TO,
        funcArgs: CALI_COORDS,
        itemDesc: "Corn is the backbone of US agriculture.",
        itemName:"Cornlapse", 
        itemSub: "A Timelapse of Corn",
        infoHTML: `
            <h3>
                Cornlapse
            </h3>
            <p>
                Corn is a staple crop. Knowing to grow it and empathize with its trifles would be prudent. Using ffmpeg, we can now see the beauty of plant growth.
                Raspberry Pi, a webcam, and some ssh magic.
                And of course, corn, dirt, and love (?). Shots every 6 world minutes, and 24 shots per video second. This is a foundation to automated, custom gardening / farming.
            </p>
        `,
        projectTypes: [CODE_PROJECT, LIFESTYLE_PROJECT],
    },
    {
        buttonText: LEARN_MORE,
        cId: "remoteBlinds",
        flairsList: [
            MECHANICS,
            NETWORKING,
            EMBEDDED_SYSTEMS,
            THREED_PRINTING,
        ],
        func: FUNC_GO_TO,
        funcArgs: CALI_COORDS,
        itemDesc: "A 10X cheaper solution to forgetting to close the blinds before showering.",
        itemName:"Remote Blinds", 
        itemSub: "Automated Home Solution",
        infoHTML: `
            <h3>
                Remote Blinds
            </h3>
            <p>
                After working out, I'm all sweaty so I usually rush into my bathroom to wash up and take a shower. Often times, my blinds are left open and I need to
                sneak out to fetch my new wear. This risks a street-view of my pipe. If I have not closed the blinds, I can do so now, 
                without worry of a peeping Tom / Tomi / T! 
            </p>
            <p>
                Using the ESP8266 microcontroller, C lang, and the MQTT protocol, have a simple, custom 3D-printed rig and servo motor quickly fix a situation. 
                Market alternatives?: $100 motorized blinds from IKEA. Compare to monetary cost of this project? $9. Rest assured, I usually remember to close the blinds (free),
                but for the price of two coffees I get a fallback AND some cool practice!
            </p>
        `,
        projectTypes: [
            CODE_PROJECT,
            HARDWARE_PROJECT,
        ],
    },
    {
        buttonText: LEARN_MORE,
        cId: "lipnet",
        flairsList: [
            COLLABORATION,
            COMPUTER_VISION,
            DATA_SCIENCE,
            MACHINE_LEARNING,
            NATURAL_LANGUAGE_PROCESSING,
            PYTHON,
            PYTORCH,
        ],
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
                Using a dataset which has self-referencing transcriptions,
                we trained temporally-aware vision network to recognize utterances and export 
                construct words. Concatenating output of next-word prediction from GPT, 
                we can have the network take advantage of semantic insights to improve 
                its overall prediction. We ran this on the NYU supercomputing cluster.
            </p>
        `,
        projectTypes: [CODE_PROJECT],
    },
    {
        buttonText: PURCHASE,
        cId: "th",
        flairsList: [
            EXPRESS,
            PYTHON,
            REACT,
            STRIPE,
        ],
        func: FUNC_GO_TO,
        funcArgs: CALI_COORDS,
        itemDesc: "A generated document to preserve life's values and stories. For those you wish to know more.",
        itemName: "TimeHere",
        itemSub: "For my mother, and father.",
        infoHTML: `
            <h3>TimeHere</h3>
            <p>
                A Python generated journal with different prompts 
                per year of existence. Used to fill out passively,
                and impart experiences and journals that might not
                otherwise make it into conversation,
                to be preserved in perpetuity.
            </p>
            <p>
                I used college printer credits to print out
                hundreds of these journal pages and gave 
                these as gifts.
            <p/>
        `,
        projectTypes: [CODE_PROJECT],
    },
    {
        buttonText: LEARN_MORE,
        cId: "aoeai",
        func: FUNC_GO_TO,
        funcArgs: NEW_YORK_COORDS,
        itemDesc: "Set of internally trained CNNs to recognize units to bootstrap a reinforcement learning agent to play AOE.",
        itemName: "AlphaEmpires", 
        itemSub: "The grassroots Age of Empires AI.",
        infoHTML: `
            <h3>AlphaEmpires</h3>
            <p>Introducing the world's first machine learning platform for Age of Empires.</p>
        `,
        projectTypes: [CODE_PROJECT],
    },
    {
        buttonText: LEARN_MORE,
        cId: "nngpu",
        func: FUNC_GO_TO,
        funcArgs: NEW_YORK_COORDS,
        itemDesc: "A parallelized implementation of spiking neural networks using NVIDIA CUDA.",
        itemName: "Spiking Izkevich Networks on CUDA", 
        itemSub: "SNNs on GPUs.",
        infoHTML: `
            <h3>Izkevich Neurons on GPUs</h3>
            <p>In CUDA, I parallelized the work of a spiking neuron simulation, speeding up the linear equivalent by 3x.</p>
        `,
        projectTypes: [CODE_PROJECT],
    },
    {
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
        `
    },
]