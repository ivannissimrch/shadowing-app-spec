# Shadowing App – Project Specification

An app to help English learners improve their spoken English by mimicking native speech. Users practice by shadowing video clips from YouTube, recording their voice, and receiving feedback on pronunciation and intonation.

**Tech Stack**

- Frontend: React, Material-UI, Next.js.
- Backend: Express
- Audio Analysis: Parselmouth (Python), Azure Speech API
- Media: YouTube API for video import

---

## Requirements

### Core Features


 ## MVP
- Import and playback YouTube video segments (10–15 second loopable chunks)
- Record and playback the user’s voice per segment
- Side-by-side comparison between native and user audio
- Visual and textual feedback on:
  - Pronunciation accuracy (word or syllable level)
  - Intonation curve and pitch contour  



---

## User Stories

- As a user, I want to import a YouTube video and play it in 10–15 second segments on loop so I can practice naturally.
- As a learner, I want to record myself repeating a segment so I can hear my performance.
- As a learner, I want to compare my recording to the native speaker to improve my pronunciation.
- As a user, I want visual feedback showing pitch and stress so I can better mimic native rhythm.
- As a casual user, I want to use the app without logging in.


---

## Spikes (Technical Research)

| Topic                  | Goal                                                                                 | Status      |
| ---------------------- | ------------------------------------------------------------------------------------ | ----------- |
| Azure Speech API       | Test pronunciation scoring and speech-to-text accuracy for user recordings           | In progress |
| YouTube API            | Test video import and segment slicing for shadowing playback                         | In progress |
| Parselmouth            | Analyze pitch, intonation feedback (and visualize it)                                | Not started |
| React Audio Recorder   | Find best library for in-browser recording with waveform preview                     | Not started |

