# Hexa Sort — Playable Ad (Unity + Luna Playworks)

A playable ad for a hexa-sort puzzle, built in Unity and exported to HTML5 with **Luna Playworks**.
Made as a test assignment in 3 days.

## Gameplay
1. A tutorial hand shows the move. If the player misses the drop, the hint comes back after a delay.
2. The player drags a stack of hex tiles onto the board.
3. Tiles of the same color jump between neighbouring stacks in a chain reaction.
4. Any stack that reaches **10 tiles of one color** collapses, with particles and a camera shake.
5. Each new wave of the chain plays faster (the speed-up factor is configurable), so the combo feels like it accelerates.
6. When the chain ends, the end card opens with a **Play Now** button.

## Technical highlights
- **Chain-reaction resolver** (`HexManager`): a coroutine-driven BFS over hex neighbours. It moves top tiles of matching color, checks for completed stacks and repeats until the board settles.
- **Juicy animation on DOTween**: tiles flip and jump along an arc, stacks collapse by scaling down, particles are tinted to the tile color and the camera shakes. All tweens are bound to their owners and killed in `OnDestroy`.
- **Smooth drag in 3D**: the pointer ray is cast onto a horizontal plane, the stack follows with lerp smoothing and snaps back if the drop misses.
- **Luna integration**: `Luna.Unity.LifeCycle.GameEnded()` fires when the end card opens, and `Luna.Unity.Playable.InstallFullGame()` handles the CTA.
- **Level-design editor tools**:
  - `HexGridGenerator` builds a hex grid with neighbour links in one click.
  - `HexTileGenerator` fills a stack from a color recipe.
  - `HexValidator` auto-positions tiles, applies color materials and repairs references on any change in the editor.

## Tech stack
Unity 2022.3 LTS · C# · Luna Playworks 7.2 · DOTween · uGUI · Particle System

## Project structure
```
Assets/_Project/Scripts/
├── GameManager.cs        # game flow: tutorial → drag → chain → end card
├── DraggableHex.cs       # drag & drop of the player's stack
├── HexDropTarget.cs      # drop slot and placement animation
├── HexManager.cs         # chain-reaction resolver, collapse, VFX
├── Hex.cs / HexTile.cs   # board cell and tile data
├── TutorialManager.cs    # tutorial hand with delays
├── Packshot.cs           # end card + Luna CTA
└── Utils/                # editor tools: grid / tile generators, validator
```

## Running
Open the project in Unity 2022.3 with the Luna Playworks plugin installed, then open the main scene and press Play. To build the HTML5 playable, use the Luna Playworks window.

---
Author: Pavel Kibirev — Unity Developer · [GitHub](https://github.com/Pacelin) · [LinkedIn](https://www.linkedin.com/in/pacelin)
