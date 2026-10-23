#!/usr/bin/env -S node
import type { Contract as Start } from '../../snapshots/5e807aab14bde5261114de1356cc9eadb120f85f928bd5b086f1efec9ce6e18d/contract';
import startContract from '../../snapshots/5e807aab14bde5261114de1356cc9eadb120f85f928bd5b086f1efec9ce6e18d/contract.json' with { type: 'json' };
import type { Contract as End } from '../../snapshots/bcde7e5e2e8488b1288a08cf7ce15e05c0c9dd96eb7fa8df919dc0f0b31b662f/contract';
import endContract from '../../snapshots/bcde7e5e2e8488b1288a08cf7ce15e05c0c9dd96eb7fa8df919dc0f0b31b662f/contract.json' with { type: 'json' };
import { Migration, MigrationCLI, col, placeholder } from '@prisma/orm-postgres/migration';

export default class M extends Migration<Start, End> {
  override readonly startContractJson = startContract;
  override readonly endContractJson = endContract;

  override get operations() {
    return [
      this.addColumn({
        schema: 'public',
        table: 'Category',
        column: col('imageUrl', 'text', { codecRef: { codecId: 'pg/text@1' } }),
      }),
      this.dataTransform(endContract, 'backfill-Category-imageUrl', {
        check: () => placeholder('backfill-Category-imageUrl:check'),
        run: () => placeholder('backfill-Category-imageUrl:run'),
      }),
      this.setNotNull({ schema: 'public', table: 'Category', column: 'imageUrl' }),
    ];
  }
}

MigrationCLI.run(import.meta.url, M);
