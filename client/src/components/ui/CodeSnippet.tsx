import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const codeLines = [
  {
    type: "keyword",
    text: "const",
    content: " name = ",
    string: '"Ram Krishna"',
    punctuation: ";",
  },
  { type: "keyword", text: "const", content: " intern = ", string: '"Not yet"', punctuation: ";" },
  {
    type: "keyword",
    text: "const",
    content: " role = ",
    string: '"Full stack developer"',
    punctuation: ";",
  },
  {
    type: "keyword",
    text: "const",
    content: " ratings = ",
    object: "{ cf: ",
    number1: "944",
    comma1: ", lc: ",
    number2: "1572",
    comma2: ", cc: ",
    number3: "1385",
    closing: " }",
    punctuation: ";",
  },
  { type: "comment", text: "// Ready to build something extraordinary." },
];

export default function CodeSnippet() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className="w-full max-w-2xl mx-auto rounded-xl overflow-hidden shadow-2xl bg-[#0d1117] border border-white/10"
    >
      {/* Window Header */}
      <div className="flex items-center px-4 py-3 bg-[#161b22] border-b border-white/5">
        <div className="flex space-x-2">
          <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
          <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
          <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
        </div>
        <div className="flex-1 text-center text-xs text-slate-400 font-mono flex items-center justify-center">
          ~/Ram_Krishna/portfolio
        </div>
      </div>

      {/* Code Content */}
      <div className="p-6 overflow-x-auto text-sm sm:text-base font-mono leading-relaxed">
        <div className="space-y-4">
          {codeLines.map((line, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 + 0.2 }}
              className="flex whitespace-nowrap"
            >
              <div className="mr-6 text-slate-600 select-none hidden sm:block">
                {(i + 1).toString().padStart(2, "0")}
              </div>
              <div>
                {line.type === "comment" ? (
                  <span className="text-emerald-500/80">{line.text}</span>
                ) : (
                  <>
                    <span className="text-purple-400">{line.text}</span>
                    <span className="text-slate-200">{line.content}</span>
                    {line.string && <span className="text-amber-300">{line.string}</span>}
                    {line.object && (
                      <span className="text-slate-200">
                        {line.object}
                        <span className="text-purple-400">{line.number1}</span>
                        {line.comma1}
                        <span className="text-red-500">{line.number2}</span>
                        {line.comma2}
                        <span className="text-amber-500">{line.number3}</span>
                        {line.closing}
                      </span>
                    )}
                    <span className="text-slate-400">{line.punctuation}</span>
                  </>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
