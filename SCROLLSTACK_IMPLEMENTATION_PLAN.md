# ScrollStack Implementation Plan for Work Cards

## Overview
Integrate React Bits ScrollStack-JS-CSS component to replace simple project cards with animated stacking cards that reveal on scroll.

## Previous Issues Analysis

### Problems Encountered:
1. **Reverse Stacking**: Cards were stacking in wrong order (last card on top instead of first)
2. **Jittery Movement**: Scroll animations were not smooth, causing visual glitches
3. **Not Stacking Properly**: Cards weren't overlapping as intended

### Root Causes:
1. **Z-index ordering**: Cards need proper z-index so earlier cards appear on top
2. **Window scroll vs Container scroll**: Conflicts between window scroll and internal container
3. **Transform updates**: Too frequent updates causing performance issues
4. **CSS conflicts**: ScrollStack CSS conflicting with page layout

## Component Requirements

### Dependencies:
- ✅ `lenis` (already installed in package.json)

### Files Needed:
1. `app/components/ScrollStack.jsx` - Main component (from React Bits)
2. `app/components/ScrollStack.css` - Styles (from React Bits)

## Implementation Strategy

### Phase 1: Proper Component Installation
1. Install ScrollStack component from React Bits using shadcn CLI
2. Place files in correct location according to project structure
3. Verify component structure matches React Bits exactly

### Phase 2: Configuration & Setup

#### Key Configuration Options:
```javascript
<ScrollStack
  useWindowScroll={false}  // Use container scroll (more reliable than window scroll)
  itemDistance={150}       // Space between cards in document flow
  itemStackDistance={50}   // Overlap distance when stacking
  baseScale={0.85}         // Scale for background cards
  itemScale={0.03}         // Additional scale per card
  stackPosition="20%"      // Where stacking begins (from top of viewport)
  scaleEndPosition="10%"   // Where scaling completes
  rotationAmount={0}       // Rotation per card (optional, set to 0 for now)
  blurAmount={2}           // Blur for background cards
/>
```

#### Why `useWindowScroll={false}`?
- More reliable positioning calculations
- Avoids conflicts with page header/footer
- Better performance
- Easier to debug

### Phase 3: Card Structure Integration

#### Current Card Structure:
```jsx
<div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
  {/* Details - 30% */}
  {/* Image - 70% */}
</div>
```

#### ScrollStack Structure:
```jsx
<ScrollStack>
  {projects.map((project) => (
    <ScrollStackItem>
      {/* Full card content */}
    </ScrollStackItem>
  ))}
</ScrollStack>
```

### Phase 4: CSS Adjustments

#### Required CSS Modifications:
1. **Card Container**:
   - Ensure cards have proper `position: relative`
   - Set appropriate `min-height` for cards
   - Maintain responsive grid layout inside

2. **ScrollStack Container**:
   - Must have `height: 100vh` for container scroll mode
   - Proper overflow handling
   - No conflicts with page padding

3. **Z-index Management**:
   - Cards should have increasing z-index (first card highest)
   - Ensure stacking context is properly established

### Phase 5: Layout Integration

#### Page Structure:
```jsx
<section className="py-24 px-10">
  <div className="max-w-7xl mx-auto">
    <ScrollStack>
      {/* Cards */}
    </ScrollStack>
  </div>
</section>
```

#### Considerations:
- Section padding should work with ScrollStack container
- Max-width container should not interfere with scrolling
- Ensure proper spacing for stacking effect

## Step-by-Step Implementation Plan

### Step 1: Install Component
- [ ] Run `npx shadcn@latest add @react-bits/ScrollStack-JS-CSS`
- [ ] Verify files created: `app/components/ScrollStack.jsx` and `app/components/ScrollStack.css`
- [ ] Check component exports match expected structure

### Step 2: Update Home Page
- [ ] Import ScrollStack and ScrollStackItem
- [ ] Remove simple card layout
- [ ] Wrap projects with ScrollStack
- [ ] Wrap each project with ScrollStackItem
- [ ] Move card grid structure inside ScrollStackItem

### Step 3: Configure ScrollStack
- [ ] Set `useWindowScroll={false}` for container scroll
- [ ] Configure spacing parameters (itemDistance, itemStackDistance)
- [ ] Set scale parameters (baseScale, itemScale)
- [ ] Configure stack position (stackPosition, scaleEndPosition)
- [ ] Optionally add blur for depth (blurAmount)

### Step 4: Adjust CSS
- [ ] Ensure ScrollStack container has proper height
- [ ] Verify card positioning works with grid layout
- [ ] Set proper z-index for cards
- [ ] Test responsive behavior

### Step 5: Testing & Refinement
- [ ] Test stacking animation works correctly
- [ ] Verify cards appear in correct order
- [ ] Check smooth scrolling (no jitter)
- [ ] Test on different screen sizes
- [ ] Adjust parameters if needed

## Troubleshooting Checklist

### If cards stack in reverse:
- [ ] Check z-index is increasing (card[0] has highest z-index)
- [ ] Verify card order in array matches display order
- [ ] Check transform translateY calculations

### If jittery movement:
- [ ] Ensure using container scroll mode (`useWindowScroll={false}`)
- [ ] Check Lenis is properly initialized
- [ ] Verify no conflicting CSS animations
- [ ] Reduce update frequency if needed

### If cards not stacking:
- [ ] Verify itemStackDistance is set correctly
- [ ] Check stackPosition triggers at right scroll point
- [ ] Ensure cards have proper spacing in document flow
- [ ] Verify CSS transforms are being applied

### If layout breaks:
- [ ] Check container height settings
- [ ] Verify max-width doesn't interfere
- [ ] Ensure grid layout works inside ScrollStackItem
- [ ] Test responsive breakpoints

## Testing Plan

### Visual Testing:
1. Cards should stack with later cards appearing smaller behind
2. Cards should smoothly transition as user scrolls
3. First card should remain on top (highest z-index)
4. Animation should be smooth, no jitter

### Functional Testing:
1. Scroll should be smooth with Lenis
2. Cards should stack when reaching stackPosition
3. Cards should unstack when scrolling back
4. All project information should remain visible

### Responsive Testing:
1. Test on mobile (small screens)
2. Test on tablet (medium screens)
3. Test on desktop (large screens)
4. Verify grid layout adapts correctly

## Success Criteria

✅ Cards stack properly with first card on top
✅ Smooth scroll animation with no jitter
✅ Cards reveal/unreveal correctly on scroll
✅ Layout remains responsive
✅ All project information displays correctly
✅ Performance is acceptable (60fps scrolling)

## Next Steps After Implementation

1. Fine-tune animation parameters based on visual feedback
2. Add rotation/transform effects if desired
3. Optimize for mobile performance if needed
4. Consider adding scroll indicators if helpful

