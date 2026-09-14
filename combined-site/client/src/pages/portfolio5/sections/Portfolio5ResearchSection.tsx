import React from "react";
import PillMilestoneSection from "../../portfolio1/sections/PillMilestoneSection";
import PillQuoteSection from "../../portfolio1/sections/PillQuoteSection";
import PillFaqSection from "../../portfolio1/sections/PillFaqSection";

export default function Portfolio5ResearchSection() {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%", gap: 50 }}>
      <div style={{
        width: 1420, background: "#FFFFFF", borderRadius: 23.6864,
        padding: "55px 49px", display: "flex", flexDirection: "column",
        alignItems: "center", gap: 60, boxSizing: "border-box",
      }}>

        {/* ── Header ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 15, width: 1322 }}>
          <div style={{ boxSizing: "border-box", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "9px 20px", gap: 10, width: 194, height: 38, border: "0.969561px solid #202833", borderRadius: 236.844 }}>
            <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 14, lineHeight: "20px", letterSpacing: 2.07195, textTransform: "uppercase", color: "#202833", whiteSpace: "nowrap" }}>research report</span>
          </div>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center", gap: 270, width: 1322 }}>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: "10px 10px 10px 0px", gap: 10, width: 664 }}>
              <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 35, lineHeight: "34px", color: "#111111", width: 654 }}>Our Success Stories Real Results, Real Impact</span>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", padding: 10, gap: 10, width: 413 }}>
              <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 16, lineHeight: "24px", color: "rgba(109,109,110,0.8)", width: 404 }}>This report analyzes core user behaviors, frustrations, and environmental factors to understand how people naturally discover and identify unknown music.</span>
            </div>
          </div>
        </div>

        {/* ── Inner content ── */}
        <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", padding: "0px 250px", gap: 40, width: 1322 }}>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 23, width: 822 }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 13, width: 822 }}>

              {/* ── Item 1 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Introduction to the Music Information Retrieval Ecosystem</span>
              </div>

              {/* Para block 1 */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The intersection of interactive gamification and Music Information Retrieval (MIR) has given rise to a new generation of applications that fundamentally alter how users discover and engage with audio. Historically, the field of music identification was dominated by rigid audio fingerprinting systems—most notably Shazam—which utilize robust algorithms to identify peak frequencies in a spectrogram over time, hashing these peaks to perform rapid database lookups. While highly effective at matching a recorded studio track to a database in noisy environments, these legacy systems are passive. The modern user experience has shifted toward interactive retrieval, wherein users engage with music through human expression, such as humming, whistling, singing, or playing trivia games based on chronologically scaled audio clips.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>This paradigm shift is exemplified by applications like "Paatu," an audio-based trivia game specifically designed for Tamil cinema music enthusiasts. Modeled loosely after the viral success of daily puzzle games, Paatu challenges users to identify Tamil film songs spanning generations—from legendary composers like M.S. Viswanathan (MSV) and Ilaiyaraaja to contemporary icons like A.R. Rahman and Anirudh—based on short, progressive audio clips. Similar applications in the regional and global space include "Isaisaaral," which focuses on identifying Tamil lyrics across chronological categories (e.g., 1991–2000, 2011–2020), and "Mukiz," a multiplayer music blind-test application featuring thousands of playlists across multiple genres. Furthermore, major educational platforms like Duolingo have integrated gamified music lessons, bridging the gap between passive listening and active musical education.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The development of a progressive, level-by-level music finding application—where a user interacts with the system by playing music or humming to find a song, scaling from easy to hard—requires a multidisciplinary approach. It demands a sophisticated synthesis of gamification mechanics, advanced deep learning models for Query-by-Humming (QBH), signal processing for stem separation, a deep understanding of complex musicological structures (such as Carnatic microtones prevalent in Tamil music), and strict adherence to regional copyright laws governing the Indian music industry.</span>
                </div>
              </div>

              {/* ── Item 2 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Architecting a Progressive Level-by-Level Song Finding System</span>
              </div>
              <div style={{ padding: 10, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>To fulfill the objective of designing a comprehensive application that scales progressively from easy to hard, the system architecture must transition from basic cognitive recall (trivia) to complex human-computer interaction (QBH). The integration of various machine learning models facilitates this transition, gradually removing the underlying musical context and forcing the user (or the algorithm) to rely on increasingly isolated melodic features.</span>
              </div>

              {/* ── Item 3 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Gamification Theory and Behavioral Mechanics</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Deploying advanced neural networks and QBH algorithms is futile if the user interface fails to retain players. Gamification—the application of game-design elements in non-game contexts—is the driving force behind the success of applications operating in the music retrieval space. By tapping into intrinsic human motivations such as curiosity, social standing, and a sense of accomplishment, gamification significantly elevates session lengths, organic retention, and conversion rates.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The fundamental architecture of these applications relies heavily on the "Progress, Pressure, and Position" framework. Progress is indicated by overcoming obstacles, pressure is applied via countdown timers or limited guesses, and position is established through social leaderboards. The "Heardle" mechanic—a direct derivative of the viral Wordle format—is highly effective in establishing this pressure. In these games, a user is initially provided with a very short clip (e.g., one second) of a song. If the user inputs an incorrect guess or skips the turn, the clip extends in duration, revealing more of the musical arrangement but simultaneously reducing the potential points awarded.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>To combat user churn, the "once-a-day" mechanic imposes artificial scarcity. By limiting the user to a single puzzle per day, the application prevents binge-consumption and subsequent burnout. This mechanic builds anticipatory pressure and encourages habituation. Crucially, this is paired with a "Streak" system. Applications reward users for returning consecutively, tapping into the psychological phenomenon of loss aversion; once a user builds a multi-day streak of correctly identifying Tamil songs, the aversion to breaking that streak becomes a primary driver of daily active usage. Platforms like Duolingo monetize this psychological attachment by offering a premium "Streak Freeze" economy, allowing users to spend virtual gems or real-world currency to protect their progress.</span>
                </div>
              </div>

              {/* ── Item 4 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Source Separation at the Edge: Enabling Intermediate Difficulties</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>To elevate the difficulty from Level 1 (identifying a song with full vocals) to Level 2 (identifying a song from its instrumental backing), the application must obscure the most recognizable elements of the track. This is achieved using Deep Learning-based audio source separation. The current state-of-the-art framework for this task is the Hybrid Transformer Demucs (HTDemucs or Demucs v4).</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>HTDemucs is a sophisticated architecture that merges a spectrogram branch and a waveform branch through a cross-domain transformer, capturing both precise frequency details and long-range temporal context. The model utilizes a 4096-point Fast Fourier Transform (FFT) with a 1024-hop size, passing the signal through BiLSTM (Bidirectional Long Short-Term Memory) layers to isolate a stereo music track into four independent stems: vocals, drums, bass, and other. By applying an optional Wiener post-filter, the system refines the soft-mask across all stems, ensuring they sum coherently back to the original mixture.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>For a mobile application, performing this computationally expensive separation on the client side reduces server costs and bypasses potential latency issues. Libraries such as stem-splitter-core allow Demucs models to be accelerated on mobile and desktop devices using hardware-specific providers like CoreML (for Apple Silicon/Neural Engine), TensorFlow Lite (for Android edge devices), and XNNPACK (for CPU fallback). By dynamically deploying these models with quantized weights (e.g., INT8 precision), the application can generate isolated instrumental loops of popular Tamil songs in near real-time, forcing the user to identify a track authored by A.R. Rahman based solely on its underlying rhythm or bassline.</span>
                </div>
              </div>

              {/* ── Item 5 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Advanced Query-by-Humming (QBH) Systems</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>As the user progresses to Levels 3 and 4, the paradigm shifts from passive listening to active audio generation. The user acts as the query source by humming, singing, or whistling a tune into the microphone, and the application must retrieve the corresponding song.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Unlike traditional audio fingerprinting, which matches exact acoustic signatures, QBH must overcome immense human variability. A human hummer may alter the tempo, shift the musical key (transposition), insert incorrect notes, or hum with poor intonation and excessive background noise. To solve this, QBH systems rely on two core computational stages: Pitch Estimation (extracting the fundamental frequency contour of the hum) and Sequence Matching (aligning the extracted contour to a database).</span>
                </div>
              </div>

              {/* ── Item 6 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Convolutional Representation for Pitch Estimation (CREPE)</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>For high-accuracy monophonic pitch estimation, CREPE has emerged as a foundational neural architecture, outperforming older signal-processing methods like SWIPE (Sawtooth Waveform Inspired Pitch Estimator) and pYIN. CREPE operates directly on the time-domain audio waveform, utilizing six convolutional blocks consisting of 1D convolutions, ReLU activations, batch normalization, and dropout.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The model takes a heavily framed audio input (e.g., 1024 samples of a 16 kHz waveform) and produces logits over 360 quantized pitch bins, covering a frequency range from 32.7 Hz to 1975.5 Hz with a highly granular resolution of 20 cents (one-fifth of a semitone). To avoid the rigidness of standard argmax decoding—which can introduce quantization banding—CREPE utilizes a local expected value decoding strategy. It calculates the expected value of the probability mass within a localized window of nine pitch bins centered on the peak, allowing for smooth, sub-bin frequency resolution. While highly accurate (often exceeding 90% Raw Pitch Accuracy), CREPE is heavily reliant on supervised training datasets, which can limit its adaptability if applied to highly unorthodox vocal inputs without fine-tuning. To optimize for mobile latency, derivative models like FCNF0 (Fully-Convolutional Network for Pitch Estimation) omit zero-padding and utilize fully-convolutional inference modes to increase CPU throughput on devices.</span>
                </div>
              </div>

              {/* ── Item 7 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Self-Supervised Pitch Estimation (SPICE) and PESTO</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>At the Expert Level (Level 4), where users may hum in noisy environments or exhibit poor pitch control, the system can leverage SPICE (Self-Supervised Pitch Estimation). Developed to overcome the scarcity of perfectly annotated, high-resolution pitch datasets, SPICE utilizes a self-supervised learning paradigm based on pitch-transposition equivariance.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>SPICE operates in the Constant-Q Transform (CQT) domain, relying on the mathematical property that a pitch shift in an audio signal maps to a simple geometric translation along the log-spaced frequency axis of a CQT spectrogram. The model feeds two versions of the same audio—one original and one artificially pitch-shifted—into a convolutional encoder. The network is trained using a loss function that enforces the difference between the resulting embeddings to be strictly proportional to the known, artificial pitch shift applied. Furthermore, SPICE incorporates a confidence estimation head to reliably distinguish between voiced (pitched) and unvoiced (noise) frames, which is critical when analyzing amateur humming recorded on a mobile device.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Subsequent advancements, such as the PESTO framework, build upon this by processing individual frames of a Variable-Q Transform (VQT) through a Siamese architecture to predict pitch distributions, further narrowing the performance gap between self-supervised and fully supervised methods. These self-supervised models form the architectural basis for commercial applications like Google's "Hum to Search" feature. Rather than converting the hum to a discrete MIDI sequence and matching it against a symbolic database, this approach generates a robust mathematical embedding of the melody directly from the spectrogram. This embedding ignores background noise and instrumental accompaniment, allowing a direct vector-space comparison between the user's hum and the original polyphonic studio recording without requiring manual transcription of the database.</span>
                </div>
              </div>

              {/* ── Item 8 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Sequence Matching: From DTW to Siamese Neural Networks</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Once the pitch contour or embedding is extracted, it must be matched against the application's database of Tamil songs. Early QBH systems relied heavily on Dynamic Time Warping (DTW) to compute the similarity distance between the hummed pitch contour and the database. DTW is highly effective at compensating for temporal inaccuracies, as it non-linearly aligns sequences that vary in speed. However, DTW is computationally expensive, O(N²), making it difficult to scale across a database containing thousands of tracks. To accelerate this, systems frequently employ Locality Sensitive Hashing (LSH), which hashes pitch vectors to quickly retrieve a shortlist of candidate melodies before applying more rigorous alignment algorithms.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Modern systems bypass DTW entirely by utilizing Siamese Style Convolutional Neural Networks (SS-CNN) for deep metric learning. A Siamese network consists of two identical (or semi-identical) encoder branches that share weights. In a QBH scenario, one branch processes the mel-spectrogram or CQT of the user's hummed audio, while the other processes the extracted melody embedding of the candidate song in the database. The CNN encoders extract high-dimensional feature vectors, which are concatenated and passed through a Fully Connected Network (FCN) to compute a similarity score.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The network is trained using contrastive loss or triplet loss, which iteratively updates the weights to minimize the Euclidean distance between positive pairs (a song and its correct hummed version) and maximize the distance between negative pairs (a song and an unrelated hum). This deep metric learning approach allows the system to evaluate perceptual similarity based on learned features rather than strict mathematical alignment, vastly improving retrieval accuracy under noisy or varied input conditions.</span>
                </div>
              </div>

              {/* ── Item 9 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Musicological Complexity: Translating Tamil Cinema to Code</span>
              </div>
              <div style={{ padding: 10, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>A music retrieval application focused on Tamil cinema must address the profound influence of Carnatic (South Indian classical) music on regional compositions. Legendary composers like Ilaiyaraaja frequently utilize complex Carnatic ragas (melodic frameworks) and intricate rhythmic cycles (talas) in popular film soundtracks. The computational analysis of Indian Art Music (IAM) introduces unique challenges for pitch estimation and melody matching that are not present in standard Western pop music datasets.</span>
              </div>

              {/* ── Item 10 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Gamakas and Microtonal Representation</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>In Carnatic music, melodies are heavily ornamented with gamakas—continuous, oscillatory pitch movements around and between fundamental notes (svaras). Unlike Western music, which relies heavily on constant-pitch notes (CPNs), a Carnatic performance is defined by how the artist slides, bends, and oscillates the pitch. There are traditionally 15 classified types of gamakas, which blur the boundaries of discrete notes. Furthermore, the Carnatic system is built upon 16 svarastanas (pitch positions), which are combined to form 72 parent scales known as Melakarta ragas, from which countless Janya (derivative) ragas are formed.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>When a user attempts to hum a highly ornamented Ilaiyaraaja melody at the "Expert" level, standard pitch trackers that aggressively quantize frequencies to the nearest 12-tone equal temperament (12-TET) semitone will fail, resulting in extreme transcription errors and poor matching. To accurately capture the essence of a Tamil film song, the pitch tracking algorithm (such as a fine-tuned CREPE model) must maintain continuous, unquantized pitch contours. Researchers have developed novel feature extraction methods, such as Sequential Pitch Distributions (SPD), which capture the sequential behavior of pitches by taking distributions between transitions, effectively capturing the direction and shape of the gamaka rather than just the discrete note values.</span>
                </div>
              </div>

              {/* ── Item 11 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Tonic Normalization and Relative Pitch</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Furthermore, Indian music lacks absolute pitch standardization (such as A = 440 Hz). Instead, it relies on a relative scale anchored to the performer's chosen fundamental pitch, known as the tonic or "Sa". If an app allows a user to hum a song, the user will instinctively hum in their natural vocal register, which rarely matches the original studio recording.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>To achieve pitch-transposition invariance, the system must perform Tonic Normalization. The pitch array extracted from the hum must be normalized against the detected tonic to yield a cent-scale representation. By normalizing the user's hum and the database tracks to their respective tonics, the QBH system can compare relative melodic intervals, entirely ignoring the absolute vocal register of the user. The development of these specialized algorithms has been heavily supported by the CompMusic project and the Saraga open dataset. The Saraga Carnatic dataset provides 124 hours of highly curated, multitrack audio recordings across 40 different ragas, complete with time-aligned melody, rhythm, and structural annotations accessible via the Dunya API. Training Siamese networks on this culturally specific data ensures that the application respects the microtonal realities of Tamil music.</span>
                </div>
              </div>

              {/* ── Item 12 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Legal Frameworks: Copyright and Music Licensing in India</span>
              </div>
              <div style={{ padding: 10, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The operational viability of any music retrieval or trivia application hinges on strict compliance with intellectual property laws. Incorporating short audio clips of commercially released music—even snippets lasting only a few seconds—triggers complex copyright obligations that cannot be circumvented through technological ingenuity.</span>
              </div>

              {/* ── Item 13 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Limitations of Fair Dealing (Section 52)</span>
              </div>
              <div style={{ padding: 10, width: 822 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Developers of music trivia apps frequently operate under the misconception that using a short 5-second snippet falls under "Fair Dealing." Under Section 52(1) of the Indian Copyright Act of 1957, fair dealing permits the use of copyrighted works without a license for specific, narrow purposes, such as private study, research, criticism, review, or reporting of current events. Indian courts have consistently interpreted these exceptions strictly; the commercial exploitation of music within a gamified, ad-supported, or monetized app does not qualify as fair dealing. Therefore, explicit licenses must be procured to avoid severe civil and criminal penalties, including injunctions and damages.</span>
              </div>

              {/* ── Item 14 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>The Bifurcation of Music Rights</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Commercial music exploitation in India requires clearing two distinct sets of rights: Publishing Rights (the underlying lyrics and composition) and Master Rights (the actual sound recording).</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>For Tamil cinema music, these rights are heavily fragmented. The Indian Performing Right Society (IPRS) is the sole registered copyright society authorized to administer publishing rights and collect royalties on behalf of lyricists and composers. Following the 2012 amendments to the Copyright Act, authors and composers were granted an inalienable right to receive royalties for the commercial exploitation of their works, even if they had previously assigned the rights to a producer. IPRS has become highly aggressive in enforcing these rights, shifting from passive royalty administration to active litigation against event organizers, streaming platforms, and application developers who fail to secure publishing licenses.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Conversely, the Master Rights for sound recordings are managed by entities like Phonographic Performance Limited (PPL), Recorded Music Performance Limited (RMPL), and private aggregators like Novex Communications. The landscape of Tamil music licensing is uniquely complex due to massive catalog shifts. Saregama, which holds a vast historic catalog of pre-independence and classic regional music, famously exited PPL to manage its public performance and digital rights independently and through Novex. Similarly, major regional labels like Think Music heavily control the modern Tamil market. An app like Paatu, which features music from MSV (classic era) to Anirudh (modern era), would need to negotiate fragmented licenses across Novex (for Saregama's retro catalog), PPL, and directly with independent labels like Think Music for sound recording rights, alongside a blanket license from IPRS for the underlying compositions.</span>
                </div>
              </div>

              {/* ── Item 15 ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>The Ilaiyaraaja Jurisprudence: Moral and Personality Rights</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>When developing a comprehensive Tamil music application, the legal landscape surrounding the legendary composer Ilaiyaraaja requires special attention, as his catalog forms the backbone of the region's musical heritage. Ilaiyaraaja has actively pursued litigation in the Madras High Court to assert both his copyright and his personality rights.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>Recent jurisprudence has highlighted the tension between the owners of the sound recording (e.g., Echo Recording or Saregama) and the original composer. While the music labels may hold the Master Rights to the sound recordings of Ilaiyaraaja's film scores, the courts have affirmed that the composer retains powerful Moral Rights (under Section 57 of the Copyright Act) and Special Rights over his musical works. In late 2025 and early 2026, the Madras High Court repeatedly intervened to protect Ilaiyaraaja's personality rights, issuing injunctions against digital platforms and film producers (such as Mythri Movie Makers) attempting to exploit his name, voice, or musical motifs without direct authorization, independent of the sound recording owner. The courts emphasized that attributes such as name, image, and voice cannot be commercially exploited or monetized on digital platforms without prior consent. Consequently, any music trivia application attempting to create a dedicated "Ilaiyaraaja Level" or heavily market his likeness and name must navigate both the record label's master rights and the composer's fiercely guarded personality and moral rights.</span>
                </div>
              </div>

              {/* ── Item 16: Synthesis ── */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 10, width: 822, marginTop: 10 }}>
                <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 500, fontSize: 20, lineHeight: "28px", color: "#191615" }}>Synthesis and Implications</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", width: 822 }}>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>The architecture of a progressive music retrieval and trivia application requires a harmonious integration of user-centric behavioral mechanics and cutting-edge machine learning. By establishing a level-by-level progression—from simple audio fingerprinting and isolated source-separated stems to highly robust Query-by-Humming systems driven by models like CREPE and SPICE—developers can seamlessly transition users from passive listeners to active participants.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>In the specific context of Tamil cinema music, this technological foundation must be adapted to process the complex, microtonal realities of Carnatic-influenced melodies and gamakas. This necessitates the implementation of localized tonic normalization and deep metric learning via Siamese networks trained on culturally specific datasets like Saraga. Concurrently, leveraging gamification mechanics such as daily streaks, progressive clip reveals, and social leaderboards guarantees the habitual user retention required for digital success.</span>
                </div>
                <div style={{ padding: 10, width: 822 }}>
                  <span style={{ fontFamily: "'SF Pro Display'", fontWeight: 400, fontSize: 18, lineHeight: "28px", color: "#808080", width: 781, display: "block" }}>However, the ultimate viability of such a platform is strictly governed by the labyrinthine music licensing landscape in India. App creators must secure bifurcated rights from entities like IPRS, PPL, and Novex, operating under the strict parameters of the Copyright Act, while remaining acutely aware of the evolving jurisprudence surrounding the moral and personality rights of legacy composers. Through the careful synthesis of these algorithmic, psychological, and legal frameworks, a modern music application can successfully transform auditory recall into an engaging, legally compliant digital experience.</span>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <PillMilestoneSection
        heading="Research milestones and heuristic findings"
        description="This project evaluated music discovery app usability through heuristic analysis, MIR research, and gamification evaluation."
        keyAchievementBody="Identified core UX patterns and system architecture requirements for progressive, level-based music identification."
        clientImpactBody="Provided a comprehensive technical and legal framework for building a Tamil music trivia and QBH application."
      />

      <PillQuoteSection
        solidLine="This research was approached with a user-first and technically rigorous mindset, focusing on the intersection of gamification, MIR, and Tamil musicology."
        mutedLine=" Through deep evaluation of pitch estimation models, source separation techniques, sequence matching algorithms, and Indian copyright law, this report provides a complete blueprint for building a culturally authentic and legally compliant music identification platform."
      />

      <PillFaqSection
        faqHeading="Music Information Retrieval and Tamil Cinema App Architecture"
        activeRow={{
          leftLabel: "Research Scope",
          rightQuestion: "What does this research cover for a Tamil music identification app?",
          active: true,
          answerText: "The research covers the full MIR stack: gamification mechanics (Heardle/Wordle patterns, streaks, daily puzzles), audio source separation via HTDemucs, pitch estimation via CREPE/SPICE/PESTO, sequence matching via DTW and Siamese CNNs, Carnatic musicology challenges (gamakas, tonic normalization, Saraga dataset), and Indian music copyright law spanning IPRS, PPL, Novex, and Ilaiyaraaja personality rights jurisprudence.",
        }}
        row2={{
          leftLabel: "Key Models",
          rightQuestion: "Which ML models power the QBH and source separation systems?",
        }}
        row3={{
          leftLabel: "Legal Compliance",
          rightQuestion: "What licenses are required to operate a Tamil music trivia app?",
        }}
      />
    </div>
  );
}
