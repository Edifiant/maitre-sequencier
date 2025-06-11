import React, { useState } from 'react';
import { Sparkles, BookOpenText, ScrollText, GraduationCap, Maximize2 } from "lucide-react";

const sequenceThemes = [
  "Dire l'amour",
  "Le monstre",
  "L'homme face à la société",
  "Le récit d'aventures",
  "Le fantastique",
  "La poésie engagée",
  "L’adolescence",
  "L’art de convaincre",
  "La liberté d'expression",
  "Le héros et le mythe"
];

const premiumThemes = {
  "L’adolescence": {
    title: "À fleur de peau : voix d’adolescents en quête de soi",
    problem: "Comment la littérature et les arts expriment-ils les bouleversements de l’adolescence ?",
    corpus: [
      "Le Clézio, 'Celui qui n’avait jamais vu la mer'",
      "BD : Smile de Raina Telgemeier",
      "Poème contemporain : 'Je suis comme ça'",
      "Slam : Grand Corps Malade, 'Midi 20'",
      "Témoignages vidéo Arte Junior"
    ],
    plan: [
      "Lecture collective et discussion autour du regard adolescent",
      "Analyse de la BD Smile : expression visuelle du malaise",
      "Lecture et écriture poétique : exprimer ses émotions",
      "Écriture et performance de slam",
      "Visionnage + débat : diversité des vécus",
      "Création finale : lettre à soi-même ou BD autobiographique"
    ],
    eval: "Slam ou lettre personnelle ou mini-BD + oral de présentation"
  }
};

export default function App() {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [fullscreen, setFullscreen] = useState(false);
  const data = premiumThemes[selectedTheme];

  return (
    <div className={\`p-6 space-y-6 mx-auto \${fullscreen ? 'max-w-full h-screen fixed inset-0 bg-white z-50 overflow-auto' : 'max-w-3xl'}\`}>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src="https://cdn-icons-png.flaticon.com/512/190/190411.png"
            alt="Logo Maître Forgeur"
            style={{ width: '48px', height: '48px', borderRadius: '9999px' }}
          />
          <div>
            <h1 className="text-3xl font-bold leading-tight">Maître Séquencier</h1>
            <p className="text-sm text-gray-500 italic">Forger des séquences, allumer des esprits ✨</p>
          </div>
        </div>
        <button onClick={() => setFullscreen(!fullscreen)} title="Mode plein écran">
          <Maximize2 size={20} />
        </button>
      </div>

      <img
        src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b"
        alt="Illustration pédagogique"
        style={{ width: '100%', height: '12rem', objectFit: 'cover', borderRadius: '12px' }}
      />

      <div>
        <select onChange={(e) => setSelectedTheme(e.target.value)} defaultValue="">
          <option value="" disabled>Choisir un thème</option>
          {sequenceThemes.map((theme) => (
            <option key={theme} value={theme}>{theme}</option>
          ))}
        </select>
      </div>

      {data ? (
        <div style={{ backgroundColor: 'white', padding: '1.5rem', borderRadius: '1rem', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '1.25rem', fontWeight: 'bold' }}><BookOpenText size={20} /> {data.title}</h2>
          <p><strong>🎯 Problématique :</strong> {data.problem}</p>
          <h3><ScrollText size={16} /> corpus :</h3>
          <ul>{data.corpus.map((item, i) => <li key={i}>{item}</li>)}</ul>
          <h3><ScrollText size={16} /> Déroulement :</h3>
          <ol>{data.plan.map((item, i) => <li key={i}>{item}</li>)}</ol>
          <p><strong><GraduationCap size={16} /> Évaluation finale :</strong> {data.eval}</p>
        </div>
      ) : (
        <div style={{ padding: '1.5rem', textAlign: 'center' }}>Veuillez sélectionner un thème pour générer la séquence.</div>
      )}
    </div>
  );
}
