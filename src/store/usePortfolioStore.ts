import { create } from 'zustand'
import type { FilterCategory, PortfolioNode } from '../data/portfolioGraph'

type PortfolioState = {
  selectedNode: PortfolioNode | null
  hoveredNodeId: string | null
  filter: FilterCategory
  search: string
  setSelectedNode: (node: PortfolioNode | null) => void
  setHoveredNodeId: (id: string | null) => void
  setFilter: (filter: FilterCategory) => void
  setSearch: (search: string) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  selectedNode: null,
  hoveredNodeId: null,
  filter: 'all',
  search: '',
  setSelectedNode: (selectedNode) => set({ selectedNode }),
  setHoveredNodeId: (hoveredNodeId) => set({ hoveredNodeId }),
  setFilter: (filter) => set({ filter }),
  setSearch: (search) => set({ search }),
}))
