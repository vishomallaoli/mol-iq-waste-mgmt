"use client";
import Breadcrumb from "@/components/ComponentHeader/ComponentHeader";
import DefaltLayout from "@/components/Layouts/DefaultLayout";
import MoleculeStructure from "../../components/MoleculeStructure/index";
import port React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import {
     createMoleculeGenerationHistory, 
     getMoleculeGenerationHistoryByUser,
}    from "@/lib/actions/molecule-generation.action";  
import { getUserByEmail } from "@/lib/actions/user-actions";
import { error } from "console";

const ModalLayout = () => {
    const { data: session} = useSession ();
    const [smiles, setSmiles] = useState (
        "CCN(CC)C(=0)[C@@]1(C)Nc2c(ccc3ccccc23)C[C@H]1N(C)C";
    );
    const [numMolecules, setNumMolecules] = useState("10");
    const [minSimilarity, setMinSimilarity] = useState("0.3");
    const [particles, setParticles] = useState("30");   
    const [iterations, setIterations] = useState("10");
    const [molecules, setMolecules] = useState([]);
    const [loading, setLoading] = useState(false);   
    const [history, setHistory] = useState([]); 
    const [userId, setUserId] = useState<string | null>(null); 

    useEffect ( () => {
        const fetchUserData = async () => {
            if (session?.user?.email) {
                try {
                    const user = await getUserByEmail(session.user.email);
                    setUserId (user._id);
                    const historyFromServer = await getMoleculeGenerationHistoryByUser(user._id,
                    );
                    setHistory(historyFromServer);
                }   catch (error) {
                    console.error("Error fetching user or history:", error);
                }    
            }
        };
        
        fetchUserData();
    },  [session?.user?.emaill]);

    const handleSubmit = async (e: any) => {
        e.preventDefault()
        setLoading(true);
        
        const API_KEY = 
            "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"

        const invokeUrl =  
            "https://health.api.nvidia.com/v1/biology/nvidia/molmim/generate"
        
        const payload = { 
            algorithm: "CMA-ES",  
            num_molecules: parseInt(numMolecules),
            property_name: "QED",
            minimize: false,
            min_similarity: parseFloat(minSimilarity),
            particles: parseInt(particles),
            iterations: parseInt(iterations),
            smi: smiles,
        };      
        }

        try { 
            const response = await fetch(invokeUrl, {
                method: "POST",
                headers: { 
                    Authorization: 'Bearer ${API_KEY}',
                    Accept: "application/json",
                    "Content-Type": "application/json",
                }
                body: JSON. stringify(payload),
         });
            
         const data = await response. json();
         const generatedMolecules = JSON. parse (data-molecules).map((mol: any) => ({
            structure: mol.sample,
            score: mol.score,
        }));

        setMolecules(generatedMolecules);

        if (userId) {
            await createMoleculeGenerationHistory(
            { 
                smiles,
                numMolecules: parseInt(numMolecules),
                minSimilarity: parseFloat(minSimilarity),
                particles: parseInt(particles),
                iterations: parseInt(iterations),
                generatedMolecules,
                
                

        

    }   
};
        

