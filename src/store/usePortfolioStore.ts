import { create } from 'zustand'
import type { ConstellationId } from '../data/constellations'
import type { FilterCategory, PortfolioNode } from '../data/portfolioGraph'
import { getRelationshipPath } from '../utils/graphPath'
import type { GraphViewMode } from '../utils/graphLayout'

export type SiteMode = 'interactive' | 'traditional'
export type PortfolioLens = 'default' | 'earthbanc'

type PortfolioState = {
  siteMode: SiteMode
  viewMode: GraphViewMode
  lens: PortfolioLens
  selectedNode: PortfolioNode | null
  hoveredNodeId: string | null
  filter: FilterCategory
  search: string
  constellation: ConstellationId | null
  relationshipPath: string[]
  activeMethodologyStage: string | null
  setSiteMode: (mode: SiteMode) => void
  setViewMode: (mode: GraphViewMode) => void
  setLens: (lens: PortfolioLens) => void
  setSelectedNode: (node: PortfolioNode | null) => void
  setHoveredNodeId: (id: string | null) => void
  setFilter: (filter: FilterCategory) => void
  setSearch: (search: string) => void
  setConstellation: (id: ConstellationId | null) => void
  setActiveMethodologyStage: (id: string | null) => void
  selectNodeWithPath: (node: PortfolioNode | null) => void
}

export const usePortfolioStore = create<PortfolioState>((set) => ({
  siteMode: 'interactive',
  viewMode: 'graph',
  lens: 'default',
  selectedNode: null,
  hoveredNodeId: null,
  filter: 'all',
  search: '',
  constellation: null,
  relationshipPath: [],
  activeMethodologyStage: null,
  setSiteMode: (siteMode) => set({ siteMode }),
  setViewMode: (viewMode) => set({ viewMode }),
  setLens: (lens) => set({ lens }),
  setSelectedNode: (selectedNode) => set({ selectedNode }),
  setHoveredNodeId: (hoveredNodeId) => set({ hoveredNodeId }),
  setFilter: (filter) => set({ filter }),
  setSearch: (search) => set({ search }),
  setConstellation: (constellation) => set({ constellation }),
  setActiveMethodologyStage: (activeMethodologyStage) => set({ activeMethodologyStage }),
  selectNodeWithPath: (node) => {
    if (!node) {
      set({ selectedNode: null, relationshipPath: [] })
      return
    }
    set({
      selectedNode: node,
      relationshipPath: getRelationshipPath(node.id),
    })
  },
}))
