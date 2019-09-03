export const DROPPABLE_RESOURCE_PANEL = 'DROPPABLE_RESOURCE_PANEL'
export const TICK_PER_MS = 500

export const getColor = type => {
  switch (type) {
    case 'backend':
      return '#4185f4'
    case 'design':
      return '#fbbe08'
    case 'frontend':
      return '#3aab58'
  }
}
