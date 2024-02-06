type statusType = {
  open: string;
  in_progress: string;
  done: string;
  cancen: string;
  pending: string;
};

const statusLabel: statusType = {
  open: 'Open',
  in_progress: 'In progress',
  done: 'Done',
  cancen: 'Cancel',
  pending: 'Pending',
};

export const status = Object.entries(statusLabel).map(([key, value]) => ({
  label: value,
  value: key,
}));
