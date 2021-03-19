import { Shape } from './types'
import { darken } from '../utils/colors'

export const ears: Shape[] = [
  (color) => `
    <g>
      <g>
        <path fill="${color}" d="M169,122.37c-6.82,2.93-13.41,6.21-19.76,9.82c-23.92,13.63-44.3,31.96-59.58,53.58c-6.45,9.12-11.99,18.83-16.5,29.02c-8.51-36.86-26.61-129.35,5.73-130.71C105.82,82.95,145.51,106.52,169,122.37z"/>
        <path fill="#fec3aa" d="M149.24,132.19c-23.92,13.63-44.3,31.96-59.58,53.58c-5.68-26.93-13.13-74.86,5.52-75.65C111.09,109.45,133.94,122.22,149.24,132.19z"/>
      </g>
      <g>
        <path fill="${color}" d="M426.7,214.48c-3.86-8.67-8.46-16.98-13.73-24.88c-16.18-24.24-38.65-44.6-65.35-59.15c-5.41-2.96-11-5.67-16.74-8.14c23.5-15.85,63.13-39.36,90.02-38.23C453.15,85.44,435.24,177.41,426.7,214.48z"/>
        <path fill="#fec3aa" d="M412.97,189.6c-16.18-24.24-38.65-44.6-65.35-59.15c16.67-10.93,42.02-25.24,59.6-24.51C427.83,106.81,419.18,160.51,412.97,189.6z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <g>
        <path fill="${darken(color, 30)}" d="M71.43,144.78c-7.58-15.77,70.38-53.22,77.96-37.45c8.76,22.89,7.8,42.95-1.61,60.58c-6.54,12.26-20.12,18.9-33.82,16.54C92.56,180.75,78.2,167.78,71.43,144.78z"/>
      </g>
      <g>
        <path fill="${darken(color, 30)}" d="M423.44,144.78c7.58-15.77-70.38-53.22-77.96-37.45c-8.76,22.89-7.8,42.95,1.61,60.58c6.54,12.26,20.12,18.9,33.82,16.54C402.31,180.75,416.68,167.78,423.44,144.78z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <g>
        <path fill="${darken(color, 30)}" d="M168.96,122.39c-44.82-64.85-131.4,5.71-112,54.39c22.14,31.31,49.5,25.6,82.55-20.4c4.69-6.52,7.07-14.42,6.74-22.45v0C153.75,129.52,161.32,125.62,168.96,122.39z"/>
        <path d="M146.24,133.94c-0.88-14.03-5.04-23.82-13.54-28.02c11.19-0.95,21.55,4.63,30.78,18.9L146.24,133.94z"/>
      </g>
      <g>
        <path fill="${darken(color, 30)}" d="M331.04,122.39c44.82-64.85,131.4,5.71,112,54.39c-22.14,31.31-49.5,25.6-82.55-20.4c-4.69-6.52-7.07-14.42-6.74-22.45v0C346.24,129.52,338.68,125.62,331.04,122.39z"/>
        <path d="M353.75,133.94c0.88-14.03,5.04-23.82,13.54-28.02c-11.19-0.95-21.55,4.63-30.78,18.9L353.75,133.94z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <g>
        <path fill="${color}" d="M168.93,122.41c-7.02,3.01-13.81,6.4-20.33,10.15c-12.31,7.07-23.67,15.39-33.87,24.76c-0.75,0.69-1.48,1.38-2.21,2.07c-29.45-10.66-40.36-32.36-41.09-60.11C108.42,93.89,148.17,96.28,168.93,122.41z"/>
        <path fill="#fec3aa" d="M148.6,132.56c-12.31,7.07-23.67,15.39-33.87,24.76c-20.72-8.3-28.47-24.32-29.01-44.64C112.9,108.72,135.09,113.26,148.6,132.56z"/>
      </g>
      <g>
        <path fill="${color}" d="M331.04,122.41c7.02,3.01,13.81,6.4,20.33,10.15c12.31,7.07,23.67,15.39,33.87,24.76c0.75,0.69,1.48,1.38,2.21,2.07c29.45-10.66,40.36-32.36,41.09-60.11C391.55,93.89,351.8,96.28,331.04,122.41z"/>
        <path fill="#fec3aa" d="M351.37,132.56c12.31,7.07,23.67,15.39,33.87,24.76c20.72-8.3,28.47-24.32,29.01-44.64C387.07,108.72,364.88,113.26,351.37,132.56z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${darken(color, 60)}" d="M107.11,128.21c-47.43,23.06-20.79,59.05,31.73,51.65c7.2-1.01,13.18-6.16,15.26-13.13C169.2,116,137.02,84.78,107.11,128.21z"/>
      <path fill="${darken(color, 60)}" d="M392.16,128.21c47.43,23.06,20.79,59.05-31.73,51.65c-7.2-1.01-13.18-6.16-15.26-13.13C330.08,116,362.26,84.78,392.16,128.21z"/>
    </g>
  `,
  (color) => `
    <g>
      <g>
        <path fill="${color}" d="M168.96,122.39c-4.56,1.95-9.01,4.07-13.36,6.34c-20.02,10.44-37.77,24.09-52.41,40.19c-0.77,0.85-1.53,1.71-2.28,2.57c-24.46-29.45-19.55-46.46,9.15-83.55C141.72,87.94,168.28,92.02,168.96,122.39z"/>
        <path fill="#fec3aa" d="M155.6,128.73c-20.02,10.44-37.77,24.09-52.41,40.19c-16.6-20.52-20.27-33.36,0.41-60.07C125.11,108.85,150.57,111.36,155.6,128.73z"/>
      </g>
      <g>
        <path fill="${color}" d="M331.04,122.39c4.56,1.95,9.01,4.07,13.36,6.34c20.02,10.44,37.77,24.09,52.41,40.19c0.77,0.85,1.53,1.71,2.28,2.57c24.46-29.45,19.55-46.46-9.15-83.55C358.28,87.94,331.72,92.02,331.04,122.39z"/>
        <path fill="#fec3aa" d="M344.4,128.73c20.02,10.44,37.77,24.09,52.41,40.19c16.6-20.52,20.27-33.36-0.41-60.07C374.89,108.85,349.43,111.36,344.4,128.73z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <g>
        <g>
          <path fill="${color}" d="M104.29,167.8c-4.66,5.04-9.01,10.32-13.03,15.83c-3.06,4.19-5.93,8.51-8.59,12.95c-6.49-1.81-15.39-5.44-24.4-12.75c-10.31-8.38-13.7-19.11-14.12-29.39c-0.32-7.01,0.75-13.83,1.88-19.57C48.63,121.62,98.23,162.73,104.29,167.8z"/>
          <path fill="#fec3aa" d="M91.26,183.63c-3.06,4.19-5.93,8.51-8.59,12.95c-6.49-1.81-15.39-5.44-24.4-12.75c-10.31-8.38-13.7-19.11-14.12-29.39c6.69,0.3,22.01,1.93,30.34,10.87C79.92,171.11,86.27,178.1,91.26,183.63z"/>
        </g>
        <g>
          <path fill="${color}" d="M395.78,167.8c4.66,5.04,9.01,10.32,13.03,15.83c3.06,4.19,5.93,8.51,8.59,12.95c6.49-1.81,15.39-5.44,24.4-12.75c10.31-8.38,13.7-19.11,14.12-29.39c0.32-7.01-0.75-13.83-1.88-19.57C451.44,121.62,401.84,162.73,395.78,167.8z"/>
          <path fill="#fec3aa" d="M408.81,183.63c3.06,4.19,5.93,8.51,8.59,12.95c6.49-1.81,15.39-5.44,24.4-12.75c10.31-8.38,13.7-19.11,14.12-29.39c-6.69,0.3-22.01,1.93-30.34,10.87C420.15,171.11,413.8,178.1,408.81,183.63z"/>
        </g>
      </g>
      <g>
        <path fill="${darken(color, 30)}" d="M114.09,61.81c0,0,6.58-1,9.37,6.78s1,20.33,8.37,24.12c7.37,3.79,17.14,1.2,16.74-9.77c-0.4-10.96,3.19-19.33,10.76-14.95c7.57,4.39,10.56,13.55,9.37,30.1s-1,36.28-5.18,41.66c-4.19,5.38-20.13,5.38-25.51-2.19c-5.38-7.57-7.97-10.96-16.34-15.95c-8.37-4.98-20.73-17.74-24.12-29.3C94.16,80.75,96.35,59.62,114.09,61.81z"/>
        <path fill="${darken(color, 30)}" d="M385.79,61.81c0,0-6.58-1-9.37,6.78s-1,20.33-8.37,24.12c-7.37,3.79-17.14,1.2-16.74-9.77c0.4-10.96-3.19-19.33-10.76-14.95c-7.57,4.39-10.56,13.55-9.37,30.1s1,36.28,5.18,41.66c4.19,5.38,20.13,5.38,25.51-2.19c5.38-7.57,7.97-10.96,16.34-15.95c8.37-4.98,20.73-17.74,24.12-29.3C405.72,80.75,403.53,59.62,385.79,61.81z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${darken(color, 60)}" d="M46.14,205.54c1.87-34.24,73.46-80.31,97.43-80.31s-24.59,109.88-36.42,118.29S44.27,239.78,46.14,205.54z"/>
      <path fill="${darken(color, 60)}" d="M453.94,205.54c-1.87-34.24-73.46-80.31-97.43-80.31c-23.97,0,24.59,109.88,36.42,118.29S455.8,239.78,453.94,205.54z"/>
    </g>
  `,
  (color) => `
    <g>
      <g>
        <path fill="${color}" d="M132.29,143.05c-10.4,7.47-19.93,15.9-28.43,25.15c-5.09,5.54-9.81,11.37-14.12,17.46c-28.39-20.73-36.5-43.03-31.42-66.35c1.57-7.27,4.44-14.66,8.4-22.11C100.24,101.25,123.48,115.19,132.29,143.05z"/>
        <path fill="#fec3aa" d="M103.86,168.2c-5.09,5.54-9.81,11.37-14.12,17.46c-28.39-20.73-36.5-43.03-31.42-66.35c6.82,2.38,16.16,6.65,26.9,14.34C98.39,143.06,102.62,157.69,103.86,168.2z"/>
      </g>
      <g>
        <path fill="${color}" d="M409.88,185.11c-4.49-6.29-9.41-12.29-14.73-17.98c-8.5-9.1-18.01-17.4-28.36-24.73c8.97-27.43,32.11-41.18,65.37-45.2c3.95,7.45,6.83,14.84,8.39,22.11C445.6,142.42,437.67,164.54,409.88,185.11z"/>
        <path fill="#fec3aa" d="M409.88,185.11c-4.49-6.29-9.41-12.29-14.73-17.98c1.4-10.41,5.77-24.38,18.5-33.48c10.74-7.69,20.08-11.96,26.9-14.34C445.6,142.42,437.67,164.54,409.88,185.11z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${color}" d="M396.44,168.52c-1.32-1.45-2.67-2.87-4.05-4.27c-16.12-16.53-35.65-30.23-57.57-40.19c-5.42-2.46-10.97-4.69-16.66-6.68c9.71-15.8,38.63-48.24,59.6-54.3c4.64-1.34,9.63,0.68,12.04,4.86C412.2,106.75,401.41,152.41,396.44,168.52z"/>
      <path fill="#fec3aa" d="M392.39,164.25c-16.12-16.53-35.65-30.23-57.57-40.19c8.37-12.44,28.55-34.38,43.41-38.67c3.49-1.01,7.24,0.5,9.06,3.65C403.95,117.9,396.18,151.81,392.39,164.25z"/>
      <path fill="${color}" d="M103.56,168.52c1.32-1.45,2.67-2.87,4.05-4.27c16.12-16.53,35.65-30.23,57.57-40.19c5.42-2.46,10.97-4.69,16.66-6.68c-9.71-15.8-38.63-48.24-59.6-54.3c-4.64-1.34-9.63,0.68-12.04,4.86C87.8,106.75,98.59,152.41,103.56,168.52z"/>
      <path fill="#fec3aa" d="M107.61,164.25c16.12-16.53,35.65-30.23,57.57-40.19c-8.37-12.44-28.55-34.38-43.41-38.67c-3.49-1.01-7.24,0.5-9.06,3.65C96.05,117.9,103.82,151.81,107.61,164.25z"/>
    </g>
  `,
  (color) => `
    <g>
      <path fill="#813d14" d="M399.89,72.35c-2.11,5.62-4.48,11.28-7.75,16.78l-0.6,1.04l-0.68,1.01l-1.38,2.02c-0.43,0.69-0.98,1.33-1.5,1.98l-1.58,1.94c-0.55,0.63-1.17,1.22-1.76,1.83c-0.61,0.6-1.16,1.24-1.82,1.79l-1.98,1.65l-1,0.82l-1.06,0.73c-5.67,3.99-12.11,6.44-18.34,7.98c-5.08,1.26-10.11,2.01-15.08,2.56c-1,4.28-2.36,8.52-4.09,12.65c-4.91-2.45-9.95-4.71-15.11-6.76c1.99-3.79,3.6-7.83,4.8-12.06c1.8-6.45,2.72-13.3,2.96-20.28c0.23-6.99-0.17-14.11-1.06-21.23c-0.92-7.12-2.28-14.24-3.9-21.34l-0.02-0.07c-0.61-2.7,1.08-5.38,3.77-5.99c2.55-0.58,5.1,0.92,5.88,3.37c2.28,7.23,4.31,14.57,5.9,22.08c1.56,7.52,2.65,15.22,3.02,23.07c0.15,3.37,0.16,6.78,0.01,10.2c3.38-0.13,6.71-0.38,9.91-0.85c5.17-0.77,9.96-2.15,14.11-4.5l0.8-0.42l0.74-0.51l1.49-1.01c0.51-0.33,0.93-0.77,1.41-1.15c0.46-0.4,0.95-0.76,1.4-1.19l1.31-1.34c0.44-0.44,0.9-0.87,1.29-1.39l1.24-1.48l0.61-0.75l0.58-0.81c3.12-4.26,5.79-9.18,8.27-14.27l0.02-0.05c1.21-2.48,4.21-3.52,6.69-2.31C399.73,67.23,400.78,69.96,399.89,72.35z"/>
      <path fill="#813d14" d="M100.25,72.35c2.11,5.62,4.48,11.28,7.75,16.78l0.6,1.04l0.68,1.01l1.38,2.02c0.43,0.69,0.98,1.33,1.5,1.98l1.58,1.94c0.55,0.63,1.17,1.22,1.76,1.83c0.61,0.6,1.16,1.24,1.82,1.79l1.98,1.65l1,0.82l1.06,0.73c5.67,3.99,12.11,6.44,18.34,7.98c5.08,1.26,10.11,2.01,15.08,2.56c1,4.28,2.36,8.52,4.09,12.65c4.91-2.45,9.95-4.71,15.11-6.76c-1.99-3.79-3.6-7.83-4.8-12.06c-1.8-6.45-2.72-13.3-2.96-20.28c-0.23-6.99,0.17-14.11,1.06-21.23c0.92-7.12,2.28-14.24,3.9-21.34l0.02-0.07c0.61-2.7-1.08-5.38-3.77-5.99c-2.55-0.58-5.1,0.92-5.88,3.37c-2.28,7.23-4.31,14.57-5.9,22.08c-1.56,7.52-2.65,15.22-3.02,23.07c-0.15,3.37-0.16,6.78-0.01,10.2c-3.38-0.13-6.71-0.38-9.91-0.85c-5.17-0.77-9.96-2.15-14.11-4.5l-0.8-0.42l-0.74-0.51l-1.49-1.01c-0.51-0.33-0.93-0.77-1.41-1.15c-0.46-0.4-0.95-0.76-1.4-1.19l-1.31-1.34c-0.44-0.44-0.9-0.87-1.29-1.39l-1.24-1.48l-0.61-0.75l-0.58-0.81c-3.12-4.26-5.79-9.18-8.27-14.27l-0.02-0.05c-1.21-2.48-4.21-3.52-6.69-2.31C100.41,67.23,99.36,69.96,100.25,72.35z"/>
      <g>
        <path fill="${color}" d="M408.03,148.46c-5.91,3.75-13.46,6.75-22.58,9.03c-10.83-9.98-22.97-18.77-36.17-26.13c10.44-11.19,23.51-16.91,38.76-18.1c10.76-0.85,22.61,0.57,35.37,3.91C425.04,130.67,419.75,141.03,408.03,148.46z"/>
        <path d="M408.03,148.46c19.69-24.45,3.23-31.46-20.01-35.19l0.02-0.01c10.76-0.85,22.61,0.57,35.37,3.91C425.04,130.67,419.75,141.03,408.03,148.46z"/>
      </g>
      <g>
        <path fill="${color}" d="M92.01,148.46c5.91,3.75,13.46,6.75,22.58,9.03c10.83-9.98,22.97-18.77,36.17-26.13c-10.44-11.19-23.51-16.91-38.76-18.1c-10.76-0.85-22.61,0.57-35.37,3.91C75,130.67,80.29,141.03,92.01,148.46z"/>
        <path d="M92.01,148.46c-19.69-24.45-3.23-31.46,20.01-35.19l-0.02-0.01c-10.76-0.85-22.61,0.57-35.37,3.91C75,130.67,80.29,141.03,92.01,148.46z"/>
      </g>
    </g>
  `,
  (color) => `
    <g>
      <path fill="${color}" d="M401.47,174.27c-1.89-2.27-3.85-4.48-5.86-6.65c-8.75-9.44-18.58-18.02-29.31-25.57c-3.22-2.27-6.52-4.44-9.9-6.52C380.95,91.93,454.34,130.21,401.47,174.27z"/>
      <path fill="#fec3aa" d="M395.61,167.62c-8.75-9.44-18.58-18.02-29.31-25.57C382.61,115.2,428.62,139.46,395.61,167.62z"/>
      <path fill="${color}" d="M98.55,174.27c1.89-2.27,3.85-4.48,5.86-6.65c8.75-9.44,18.58-18.02,29.31-25.57c3.22-2.27,6.52-4.44,9.9-6.52C119.07,91.93,45.68,130.21,98.55,174.27z"/>
      <path fill="#fec3aa" d="M104.41,167.62c8.75-9.44,18.58-18.02,29.31-25.57C117.41,115.2,71.4,139.46,104.41,167.62z"/>
      <g>
        <path fill="#fec3aa" d="M359.91,71.14l-0.89,14.69l-1.69,27.82l-0.38,6.31l-0.93,15.34c-3.51-2.15-7.11-4.2-10.78-6.13c-18.63-9.83-39.24-16.86-61.16-20.47l18.57-28.84l10.95-16.99l4.25-6.6c2.35-3.65,6.93-5.17,11-3.66l25.04,9.29C357.71,63.32,360.15,67.07,359.91,71.14z"/>
        <path fill="${color}" d="M337.5,71.94c0,5-10.52,9.06-23.49,9.06c-4.12,0-7.99-0.41-11.36-1.14l10.95-16.99h0.41C326.98,62.87,337.5,66.93,337.5,71.94z"/>
        <path fill="${color}" d="M359.02,85.83l-1.69,27.82c-11.88-1.24-20.85-6.96-20.85-13.84C336.48,92.62,346.32,86.68,359.02,85.83z"/>
      </g>
      <g>
        <path fill="#fec3aa" d="M216.14,108.7c-21.92,3.61-42.53,10.64-61.16,20.47c-3.67,1.93-7.27,3.98-10.78,6.13l-0.93-15.34l-0.38-6.31l-1.69-27.82l-0.89-14.69c-0.24-4.07,2.2-7.82,6.02-9.24l25.04-9.29c4.07-1.51,8.65,0.01,11,3.66l4.25,6.6l10.32,16.01l0.63,0.98l10.23,15.88L216.14,108.7z"/>
        <path fill="${color}" d="M207.8,95.74c-3.81,1.54-8.26,2.86-13.07,3.81c-15.49,3.06-28.92,1.12-30-4.32c-1.07-5.44,10.62-12.33,26.11-15.39c2.08-0.41,4.12-0.73,6.1-0.96l0.63,0.98L207.8,95.74z"/>
      </g>
    </g>
  `,
]
