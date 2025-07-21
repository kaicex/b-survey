import { Survey } from '@/types/survey';

export const sampleSurvey: Survey = {
  id: '1',
  title: 'Boomerang',
  description: 'Survey for Boomerang',
  questions: [
    {
      id: 'q1',
      type: 'single',
      title: 'What best describes you?',
      required: true,
      options: [
        { id: 'opt1', text: 'Solopreneur', value: 'solopreneur', icon: '👨‍💼' },
        { id: 'opt2', text: 'Agency', value: 'agency', icon: '🏢' },
        { id: 'opt3', text: 'Sales Person', value: 'sales_person', icon: '👨‍💻' },
        { id: 'opt4', text: 'SMB owner', value: 'smb_owner', icon: '👑' }
      ]
    },
    {
      id: 'q2',
      type: 'text',
      title: 'As a SaaS platform, we have requests from local businesses for implementation. We\'re hiring partners to onboard those clients and get recurring revenue for it.',
      required: false,
      maxLength: 500,
      placeholder: ''
    }
  ]
};
