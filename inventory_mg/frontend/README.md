# Codelink International - SaaS Inventory Management System

A comprehensive, modern SaaS inventory management system built with Next.js, featuring a professional dark-themed UI, advanced animations, and role-based access control.

## 🚀 Features

### Landing Website
- **Modern Dark Theme**: Professionally designed with animated gradients and particles
- **Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **Interactive Sections**: Hero, About, Services, Pricing, Contact with smooth scrolling
- **Framer Motion Animations**: Engaging page transitions and micro-interactions
- **Professional Pricing Plans**: Basic ($29), Standard ($79), Premium ($149)

### Authentication System
- **Secure Login/Signup**: Multi-step registration with plan selection
- **Password Security**: Show/hide toggles with validation
- **Responsive Forms**: Mobile-optimized authentication flows
- **Progress Indicators**: Visual feedback during registration process

### Dashboard & Inventory Management
- **Role-Based Access Control**: Admin, Manager, Staff permissions
- **Collapsible Sidebar**: Clean navigation with dynamic menu items
- **Real-time Search & Filtering**: Instant product search and category filters
- **Advanced Product Management**: CRUD operations with image support
- **Export Functionality**: CSV export for inventory data
- **Pagination**: Efficient handling of large product catalogs

### User Profile System
- **Avatar Management**: Image upload with drag-drop support
- **Security Settings**: Password management and security preferences
- **Theme Preferences**: Dark/light mode toggle (dark mode default)
- **Notification Settings**: Granular control over system notifications

## 🛠 Tech Stack

- **Framework**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS with custom dark theme
- **UI Components**: ShadCN/UI library
- **Animations**: Framer Motion for smooth transitions
- **Icons**: Lucide React
- **State Management**: React hooks (useState, useEffect)
- **Responsive Design**: Mobile-first approach with breakpoints

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-repo/codelink-inventory-saas.git
   cd codelink-inventory-saas
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Run development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open in browser**
   ```
   http://localhost:3000
   ```

## 🏗 Project Structure

```
├── app/                          # Next.js 13+ app directory
│   ├── auth/                     # Authentication pages
│   │   ├── login/               # Login page
│   │   └── signup/              # Registration page
│   ├── dashboard/               # Dashboard page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout
│   └── page.tsx                 # Homepage
├── components/                   # React components
│   ├── auth/                    # Authentication components
│   │   ├── LoginForm.tsx
│   │   └── SignupForm.tsx
│   ├── dashboard/               # Dashboard components
│   │   ├── Dashboard.tsx        # Main dashboard container
│   │   ├── Sidebar.tsx          # Navigation sidebar
│   │   ├── TopBar.tsx           # Header with search and notifications
│   │   ├── DashboardContent.tsx # Content router
│   │   └── pages/               # Dashboard pages
│   │       ├── DashboardOverview.tsx
│   │       ├── InventoryPage.tsx
│   │       ├── OrdersPage.tsx
│   │       ├── ReportsPage.tsx
│   │       ├── UsersPage.tsx
│   │       └── ProfilePage.tsx
│   ├── landing/                 # Landing page components
│   │   ├── LandingPage.tsx      # Main landing container
│   │   ├── Header.tsx           # Navigation header
│   │   ├── HeroSection.tsx      # Hero section
│   │   ├── AboutSection.tsx     # About section
│   │   ├── ServicesSection.tsx  # Services section
│   │   ├── PackagesSection.tsx  # Pricing section
│   │   ├── ContactSection.tsx   # Contact section
│   │   └── Footer.tsx           # Footer section
│   └── ui/                      # ShadCN UI components
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── hooks/                       # Custom React hooks
│   └── use-toast.ts             # Toast notification hook
├── public/                      # Static assets
├── tailwind.config.ts           # Tailwind configuration
├── next.config.js              # Next.js configuration
└── package.json                # Dependencies
```

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#3B82F6 to #1D4ED8)
- **Secondary**: Purple (#8B5CF6 to #7C3AED)
- **Accent**: Cyan (#06B6D4) and Orange (#F97316)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)
- **Neutral**: Gray scale (900-100)

### Typography
- **Font Family**: Inter (Google Fonts)
- **Headings**: 400, 600, 700 weights
- **Body Text**: 400, 500 weights
- **Line Heights**: 120% (headings), 150% (body)

### Spacing System
- **Base Unit**: 8px
- **Scale**: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px
- **Container**: Max-width 1280px with responsive padding

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🔐 Security & Permissions

### User Roles
- **Admin**: Full system access, user management, all reports
- **Manager**: Inventory, orders, reports (no user management)
- **Staff**: Inventory management only

### Role-Based Navigation
The sidebar dynamically shows menu items based on user permissions:
```typescript
const menuItems = [
  { id: 'dashboard', roles: ['Admin', 'Manager', 'Staff'] },
  { id: 'inventory', roles: ['Admin', 'Manager', 'Staff'] },
  { id: 'orders', roles: ['Admin', 'Manager'] },
  { id: 'reports', roles: ['Admin', 'Manager'] },
  { id: 'users', roles: ['Admin'] },
  { id: 'profile', roles: ['Admin', 'Manager', 'Staff'] }
];
```

## 🔧 Development Workflow

### Code Standards
- **ESLint**: Enabled with Next.js configuration
- **TypeScript**: Strict mode enabled
- **Prettier**: Recommended for consistent formatting

### Component Development
- **Functional Components**: Use React hooks
- **Props Interface**: TypeScript interfaces for all components
- **Default Props**: Use defaultProps for optional props

### State Management
- **Local State**: useState for component-level state
- **Global State**: Consider Context API for app-wide state
- **Form State**: Controlled components with validation

### Animation Guidelines
- **Page Transitions**: 0.3-0.5 second duration
- **Micro-interactions**: 0.1-0.2 second duration
- **Hover Effects**: Smooth transitions with transform/opacity

## 📱 Responsive Design

### Mobile Optimization
- **Navigation**: Collapsible hamburger menu
- **Tables**: Card-based layout on mobile
- **Forms**: Single-column layout with larger touch targets
- **Images**: Optimized sizes with loading states

### Tablet Experience
- **Sidebar**: Collapsible with icon-only mode
- **Grid Layouts**: 2-column where appropriate
- **Touch Interactions**: Optimized for tablet use

## 🚀 Deployment

### Build Commands
```bash
# Development
npm run dev

# Production build
npm run build

# Start production server
npm run start

# Type checking
npm run typecheck

# Linting
npm run lint
```

### Environment Variables
Create a `.env.local` file for local development:
```env
NEXT_PUBLIC_APP_NAME="Codelink International"
NEXT_PUBLIC_APP_VERSION="1.0.0"
```

### Static Export
The application is configured for static export:
```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  eslint: { ignoreDuringBuilds: true },
  images: { unoptimized: true }
};
```

## 🔮 Future Enhancements

### Phase 1 (Next Update)
- **Database Integration**: Supabase or PostgreSQL
- **Real Authentication**: JWT tokens and session management
- **API Routes**: Backend functionality for CRUD operations
- **Image Upload**: Cloud storage integration (AWS S3/Cloudinary)

### Phase 2 (Advanced Features)
- **Advanced Reporting**: Charts and analytics with Chart.js/D3
- **Multi-tenant Support**: Organization-based isolation
- **Advanced Search**: Elasticsearch integration
- **Webhooks**: External system integrations

### Phase 3 (Enterprise)
- **Mobile App**: React Native companion app
- **Advanced Permissions**: Granular access control
- **Audit Logs**: Complete activity tracking
- **API Documentation**: OpenAPI/Swagger integration

## 🤖 AI-Assisted Development

### Code Generation Prompts
When working with AI assistants, use these patterns:

1. **Component Creation**:
   ```
   Create a new dashboard component for [feature] with:
   - Dark theme styling
   - Framer Motion animations
   - Responsive design
   - TypeScript interfaces
   ```

2. **Feature Addition**:
   ```
   Add [feature] to the inventory system with:
   - CRUD operations
   - Search and filtering
   - Modal dialogs
   - Form validation
   ```

3. **Styling Updates**:
   ```
   Update the [component] with:
   - Improved hover states
   - Better mobile responsiveness
   - Enhanced animations
   - Accessibility improvements
   ```

### Development Best Practices
- **Consistent Naming**: Use descriptive, consistent component names
- **File Organization**: Keep components in appropriate directories
- **Type Safety**: Maintain TypeScript strict mode compliance
- **Performance**: Optimize animations and images for performance

## 🛠 Troubleshooting

### Common Issues

1. **Build Errors**:
   - Check TypeScript types
   - Verify import paths
   - Update dependencies

2. **Animation Performance**:
   - Use transform properties (opacity, scale, translate)
   - Avoid animating layout properties
   - Use will-change CSS property sparingly

3. **Responsive Issues**:
   - Test on multiple devices
   - Use browser dev tools
   - Check Tailwind breakpoints

### Debug Mode
Enable debug mode in development:
```javascript
// Add to your component
if (process.env.NODE_ENV === 'development') {
  console.log('Debug info:', data);
}
```

## 📞 Support

For development questions or issues:
- Check the [GitHub Issues](https://github.com/your-repo/issues)
- Review the component documentation
- Test in isolation before integrating

## 📄 License

This project is proprietary software developed for Codelink International.

---

**Built with ❤️ using Next.js, TypeScript, and Tailwind CSS**