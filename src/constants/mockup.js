// ─────────────────────────────────────────────
//  Hero Mockup Constants
//  Phone mockup content — balance, action buttons,
//  and asset list. Edit here to update the mockup.
// ─────────────────────────────────────────────

export const MOCKUP_USER = {
  addressLabel: 'Address',
  address:      '0x7094.2242',
  time:         '9:41',
};

export const MOCKUP_BALANCE = {
  label:   'Balance',
  amount:  '$8,013.20',
  change:  '$253.6 (4.2%)',
  positive: true,
};

// Icons are imported and attached in HeroMockup.jsx
// Keep label strings here; icon keys reference lucide icons
export const MOCKUP_ACTIONS = [
  { id: 'action-send',    iconKey: 'Send',           label: 'Send'    },
  { id: 'action-receive', iconKey: 'Download',       label: 'Receive' },
  { id: 'action-swap',    iconKey: 'ArrowLeftRight', label: 'Swap'    },
  { id: 'action-more',    iconKey: 'MoreHorizontal', label: 'More'    },
];

export const MOCKUP_ASSETS = [
  {
    id:       'asset-btc',
    name:     'Bitcoin',
    symbol:   'BTC',
    price:    '$114,936.72',
    change:   '$6,356 (4.2%)',
    positive: true,
    letter:   'B',
    // These map to CSS variables defined in index.css
    colorVar: 'var(--color-btc)',
    bgVar:    'var(--color-btc-bg)',
  },
  {
    id:       'asset-usdt',
    name:     'Tether',
    symbol:   'USDT',
    price:    '$12,876.04',
    change:   '-$804.5 (5.7%)',
    positive: false,
    letter:   'T',
    colorVar: 'var(--color-usdt)',
    bgVar:    'var(--color-usdt-bg)',
  },
];

export const MOCKUP_ASSET_LIST_LABEL = 'Asset List';
export const MOCKUP_ASSET_SEE_ALL   = 'See All';
