import { render, screen } from '@testing-library/react';
import Application from '../Application';

describe("Application", () => {
    test('renders correctly', () => {
        render(<Application />);

        const pageHeading = screen.getByRole("heading", {
            level: 1,
            name: 'Job application form',
        });
        expect(pageHeading).toBeInTheDocument();

        const sectionHeading = screen.getByRole("heading", {
            level: 2,
            name: 'Section 1',
        });
        expect(sectionHeading).toBeInTheDocument();

        const nameElement = screen.getByRole('textbox', {
            name: "Name",
        });
        expect(nameElement).toBeInTheDocument();

        const bioElement = screen.getByRole('textbox', {
            name: "Bio",
        });
        expect(bioElement).toBeInTheDocument();
        
        const jobLocationElement = screen.getByRole('combobox');
        expect(jobLocationElement).toBeInTheDocument();

        const termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        const submitElement = screen.getByRole('button');
        expect(submitElement).toBeInTheDocument();
    });
});