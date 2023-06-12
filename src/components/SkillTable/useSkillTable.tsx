import { useCallback, useMemo, useState } from 'react';
import { ISkillsModel } from 'components/Skills';

const useSkillTable = (skills: ISkillsModel[], sortName: string, sortAsc: boolean) => {
  let count = 0;
  const [sort, setSort] = useState({
    name: sortName,
    isAsc: true,
  });

  const doSort = useCallback(
    (key: string = 'name', isAsc: boolean) => {
      const sorted = skills.sort((a, b) => {
        const sortName = key as keyof Pick<ISkillsModel, 'name' | 'yearsExp'>;
        let keyA = a[sortName];
        let keyB = b[sortName];

        keyA = typeof keyA === 'string' ? keyA.toUpperCase() : keyA;
        keyB = typeof keyB === 'string' ? keyB.toUpperCase() : keyB;

        if (isAsc) {
          return keyA > keyB ? 1 : keyA === keyB ? 0 : -1;
        } else {
          return keyA < keyB ? 1 : keyA === keyB ? 0 : -1;
        }
      });

      return sorted;
    },
    [skills],
  );

  const sortedData = useMemo(() => {
    console.log('sortedData ', Date.now());
    const data = doSort(sortName, sortAsc);
    const groupData: Partial<ISkillsModel>[] = [];
    const placeholder: Pick<ISkillsModel, 'name'> = { name: 'placeholder' };

    data.forEach((item, index) => {
      const currentValue = item[sortName as keyof ISkillsModel];
      const nextSkill = data[index + 1] || null;
      const nextValue = nextSkill ? nextSkill[sortName as keyof ISkillsModel] : null;

      if (typeof currentValue === 'string' && typeof nextValue === 'string') {
        const compare1 = currentValue[0].toUpperCase();
        const compare2 = nextValue[0].toUpperCase();

        count = compare1 === compare2 || count < 5 ? count + 1 : 0;
      } else {
        count = currentValue === nextValue || count < 5 ? count + 1 : 0;
      }

      groupData.push(item);

      if (count === 0 && !!nextValue) {
        groupData.push(placeholder);
      }
    });

    return groupData;
  }, [sortName, skills, count, sortAsc]);

  return {
    doSort,
    sortedData,
  };
};

export default useSkillTable;
