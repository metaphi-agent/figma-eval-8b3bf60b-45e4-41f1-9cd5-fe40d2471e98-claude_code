# Component Inventory - Dashdark X Admin Dashboard

## Layout Components
- **Sidebar** - Collapsible navigation with logo, search, menu items, user profile
- **TopBar** - Page header with breadcrumb/title, search, action buttons
- **PageLayout** - Main layout wrapper with sidebar + content area

## UI Components (Atoms)
- **Button** - Variants: primary (purple), secondary, icon-only, with icon
- **Input** - Text input with icon support (search, phone, email icons)
- **Card** - Container with optional header, content, footer
- **Badge** - Status indicators (Online/Offline, tags)
- **Avatar** - Circular user photos, company logos
- **Icon** - Custom SVG icons from Figma (home, users, settings, etc.)
- **Dropdown** - Three-dot menu, select dropdown
- **SearchInput** - Input with search icon

## Navigation Components
- **SidebarItem** - Navigation menu item with icon, label, chevron
- **Breadcrumb** - Page navigation trail
- **Tabs** - Multi-tab interface for forms

## Data Display Components
- **StatCard** - Metric card with icon, value, trend indicator
- **ProgressBar** - Linear progress indicator
- **ProgressCircle** - Circular progress/donut chart
- **DataTable** - Sortable table with pagination, checkboxes, action buttons
- **TableRow** - Table row with avatar, multiple columns, actions
- **Pagination** - Page navigation controls

## Chart Components
- **LineChart** - Multi-line area chart with tooltips
- **BarChart** - Vertical bar chart with legend
- **DonutChart** - Circular progress chart with center text
- **WorldMap** - Dot map visualization

## Form Components
- **FormField** - Label + input wrapper
- **FileUpload** - Drag-and-drop file upload with preview
- **Textarea** - Multi-line text input
- **Select** - Dropdown select field
- **Checkbox** - Checkbox with label
- **FormSection** - Section with title and description

## Page-Specific Components

### Kanban Board
- **KanbanColumn** - Kanban column header with count, add button
- **KanbanCard** - Task card with avatars, title, description, tags, checklist

### Messages
- **ConversationList** - List of chat conversations
- **ConversationItem** - Single conversation preview
- **ChatWindow** - Message thread display
- **MessageBubble** - Individual message

### Calendar
- **CalendarGrid** - Month/year view calendar
- **CalendarDay** - Day cell with events

### Products
- **ProductCard** - Product image, title, price, action buttons

## Design Tokens Applied

### Colors
- Primary: #B6C72F (purple/magenta gradient)
- Background: #080F26 (neutral-800)
- Card background: #121C4D (neutral-700)
- Border: #37446B (neutral-600)
- Text: #FFFFFF, #AEB8E1, #7E89AC
- Accent: #B7C3FF (cyan), #8A91FB (blue), #F9B52A (orange)
- System: Green (#10B981), Red (#EF4444), Yellow

### Typography
- Font: Inter
- Sizes: 48px (display), 32px (h1), 24px (h2), 16px (body), 14px (small)
- Weights: 400 (regular), 500 (medium), 600 (semibold), 700 (bold)

### Spacing
- Gap: 8px, 16px, 24px, 32px
- Padding: 16px (cards), 24px (sections)
- Card spacing: 24px between cards

### Border Radius
- Small: 4px (badges)
- Medium: 8px (inputs, buttons)
- Large: 12px (cards)
- Full: 9999px (avatars, circular buttons)
