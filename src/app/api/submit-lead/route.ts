import { NextRequest, NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export const dynamic = 'force-dynamic';

// POST handler for receiving qualified lead data
export async function POST(request: NextRequest) {
  try {
    // Parse the multipart form data
    const formData = await request.formData();

    // Extract text fields
    const location = formData.get('location') as string || '';
    const scope = formData.get('scope') as string || '';
    const standards = formData.get('standards') as string || '';
    const timeline = formData.get('timeline') as string || '';
    const file = formData.get('file') as File | null;

    // Validate required fields
    if (!location || !scope || !standards || !timeline) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Process file upload if provided
    let fileUrl = null;
    let fileName = null;

    if (file && file.size > 0) {
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);

      // Generate a unique filename
      const timestamp = Date.now();
      fileName = `${timestamp}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`;

      // Define upload directory
      const uploadDir = path.join(process.cwd(), 'public', 'uploads');

      // Ensure upload directory exists
      await fs.mkdir(uploadDir, { recursive: true });

      // Write file
      const filePath = path.join(uploadDir, fileName);
      await fs.writeFile(filePath, buffer);

      // Generate public URL
      fileUrl = `/uploads/${fileName}`;
    }

    // Compile lead summary
    const leadSummary = `
Lead Summary for AXICON Pte. Ltd.
--------------------------------
Location: ${location}
Scope:    ${scope}
Standards: ${standards}
Timeline:  ${timeline}
File Uploaded: ${fileName || 'None'}
Timestamp: ${new Date().toISOString()}
`;

    // Log to console (in production, this would go to a database or CRM)
    console.info('AXICON LEAD SUBMITTED:', leadSummary);

    // Here you would typically:
    // 1. Save to database
    // 2. Send notification/email to team
    // 3. Trigger any workflow automation

    return NextResponse.json(
      {
        success: true,
        message: 'Lead submitted successfully',
        leadId: `AXC-${Date.now()}`,
        fileUrl
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing lead submission:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}

// Optional: GET handler for testing
export async function GET() {
  return NextResponse.json(
    { message: 'AXICON Lead Submission API is operational' },
    { status: 200 }
  );
}
